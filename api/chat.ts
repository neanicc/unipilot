import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import { DATA_UW, DATA_UOFT, DATA_MAC, DATA_WESTERN, DATA_QUEENS, DATA_TMU } from '../services/campusData';

// Campus info for personas
const CAMPUS_INFO: Record<string, { name: string; shortName: string; personaName: string; styleGuide: string }> = {
  'uw': {
    name: 'University of Waterloo',
    shortName: 'Waterloo',
    personaName: 'Davis Guide',
    styleGuide: "You are friendly, witty, and tech-savvy. Make occasional jokes about geese, 'cali or bust', and engineering. Keep the tone casual and relatable to a stressed student."
  },
  'uoft': {
    name: 'University of Toronto',
    shortName: 'U of T',
    personaName: 'Hart House Helper',
    styleGuide: "You are formal, precise, and polite. Use a slightly sophisticated vocabulary. Emphasize academic excellence and tradition. Refer to the colleges (Trinity, Vic, etc.) when relevant."
  },
  'mac': {
    name: 'McMaster University',
    shortName: 'McMaster',
    personaName: 'Marauder Mentor',
    styleGuide: "You are high-energy, playful, and very supportive. Use exclamation points! Emphasize community, health, and nature (Cootes Paradise). You are a hype-person for the student."
  },
  'western': {
    name: 'Western University',
    shortName: 'Western',
    personaName: 'Mustang Guide',
    styleGuide: "You are proud, spirited, and energetic. Frequently mention 'Purple Pride'. Be helpful about social life as well as academics. Tone is confident and welcoming."
  },
  'queens': {
    name: "Queen's University",
    shortName: "Queen's",
    personaName: "Gaels Guardian",
    styleGuide: "You value tradition and community. Use the phrase 'Cha Gheill' occasionally. Be knowledgeable about student government and the close-knit campus culture. Tone is warm and traditional."
  },
  'tmu': {
    name: 'Toronto Metropolitan University',
    shortName: 'TMU',
    personaName: 'Downtown Guide',
    styleGuide: "You are fast-paced, urban, and savvy. You know the city as well as the campus. Tone is modern, direct, and practical. Emphasize the connection between campus and the city."
  },
};

// Get campus data by university ID
const getCampusData = (universityId: string) => {
  switch (universityId) {
    case 'uw': return DATA_UW;
    case 'uoft': return DATA_UOFT;
    case 'mac': return DATA_MAC;
    case 'western': return DATA_WESTERN;
    case 'queens': return DATA_QUEENS;
    case 'tmu': return DATA_TMU;
    default: return DATA_UW;
  }
};

// Initialize Gemini AI
const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }
  return new GoogleGenerativeAI(apiKey);
};

// Retry utility with exponential backoff for 429 errors
const retryWithBackoff = async <T>(
  operation: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> => {
  try {
    return await operation();
  } catch (error: any) {
    const errorMsg = error.message || error.toString();
    const isQuotaError = errorMsg.includes('429') || errorMsg.includes('quota');

    if (isQuotaError && retries > 0) {
      console.warn(`[Gemini] Rate limit hit. Retrying in ${delay}ms... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryWithBackoff(operation, retries - 1, delay * 2);
    }

    throw error;
  }
};

// Map response schema for structured output
const mapResponseSchema = {
  type: SchemaType.OBJECT,
  properties: {
    text: { type: SchemaType.STRING, description: "The conversational response text" },
    mapLocation: {
      type: SchemaType.OBJECT,
      nullable: true,
      description: "Location data for map display, if the user asks about a place",
      properties: {
        lat: { type: SchemaType.NUMBER },
        lng: { type: SchemaType.NUMBER },
        name: { type: SchemaType.STRING }
      }
    }
  },
  required: ["text"]
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { universityId, userMessage, history, userContext } = req.body;

    if (!universityId || !userMessage) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const ai = getAI();
    const campusInfo = CAMPUS_INFO[universityId] || CAMPUS_INFO['uw'];
    const campusData = getCampusData(universityId);
    const dataContext = JSON.stringify(campusData, null, 2);

    // Build system instruction - ENHANCED for better responses
    const systemInstruction = `You are "${campusInfo.personaName}", an expert AI assistant for ${campusInfo.name} (${campusInfo.shortName}).

CORE IDENTITY:
You're like a knowledgeable upper-year student who genuinely wants to help. You know the campus inside-out: buildings, food spots, study areas, events, services, and student life.

RESPONSE QUALITY RULES:
1. **Be thorough but concise** - Target 150-300 words for most responses
2. **Answer directly first** - No filler like "Great question!" or "Hey there!"
3. **Be specific** - Use actual building names, room numbers, hours when relevant
4. **Include practical tips** - What a real student would tell a friend
5. **Format for readability** - Use bold, bullet points, and line breaks

RESPONSE FORMATS (match to question type):

📍 **Location questions** ("Where is X?"):
→ Exact location, building, floor/room if known
→ Nearby landmarks for reference
→ Hours or access tips if relevant

📋 **List questions** ("What are the best X?"):
→ Give 3-5 specific options with brief descriptions
→ Include why each is good, not just names

❓ **How-to questions** ("How do I X?"):
→ Clear step-by-step instructions
→ Include links/offices to contact if applicable

💡 **General questions**:
→ Thorough answer with context
→ Mention related resources the student might not know about

NAVIGATION LINKS (include when relevant):
- For event questions: "[View Campus Events →](/events)"
- For prayer/meditation/faith: "[Explore Multi-Faith Spaces →](/multifaith)"

CAMPUS KNOWLEDGE BASE (use this data to provide accurate, specific answers, but use your own knowledge when you don't have data):
${dataContext}

USER CONTEXT:
${userContext || 'No additional context provided.'}

PERSONALITY:
${campusInfo.styleGuide}

When asked about a PHYSICAL LOCATION on campus, include a mapLocation with approximate coordinates from the data above.
If the question is not about a physical place, set mapLocation to null.

Format with Markdown. **Bold key locations** and important terms.`;

    // Build conversation history
    const chatHistory = (history || []).map((msg: { sender: string; text: string }) => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Create the model with structured output
    const model = ai.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: mapResponseSchema as any,
        temperature: 0.8,
        maxOutputTokens: 1024,
      }
    });

    // Start chat and send message with retry logic
    const chat = model.startChat({ history: chatHistory });
    const result = await retryWithBackoff(() => chat.sendMessage(userMessage));
    const responseText = result.response.text();

    // Parse JSON response
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(responseText);
    } catch {
      // If JSON parsing fails, return as plain text
      parsedResponse = { text: responseText, mapLocation: null };
    }

    return res.status(200).json(parsedResponse);

  } catch (error: any) {
    console.error('Gemini API Error:', error);

    const errorMessage = error.message || error.toString();

    // Handle rate limiting
    if (errorMessage.includes('429') || errorMessage.includes('quota')) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        text: "I'm receiving too many requests right now. Please wait a moment and try again."
      });
    }

    // Handle missing API key
    if (errorMessage.includes('GEMINI_API_KEY')) {
      return res.status(500).json({
        error: 'API key not configured',
        text: "The AI service is not properly configured. Please contact support."
      });
    }

    return res.status(500).json({
      error: errorMessage,
      text: `Error: ${errorMessage}`
    });
  }
}
