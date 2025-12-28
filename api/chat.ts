import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

// Campus data imports - these are inlined for serverless
const CAMPUS_DATA: Record<string, { name: string; shortName: string; personaName: string }> = {
  'uw': { name: 'University of Waterloo', shortName: 'Waterloo', personaName: 'Davis Guide' },
  'uoft': { name: 'University of Toronto', shortName: 'U of T', personaName: 'Hart House Helper' },
  'mac': { name: 'McMaster University', shortName: 'McMaster', personaName: 'Hamilton Helper' },
  'western': { name: 'Western University', shortName: 'Western', personaName: 'Western Guide' },
  'queens': { name: "Queen's University", shortName: "Queen's", personaName: "Tricolour Guide" },
  'tmu': { name: 'Toronto Metropolitan University', shortName: 'TMU', personaName: 'Bold Guide' },
};

// Initialize Gemini AI
const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }
  return new GoogleGenerativeAI(apiKey);
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
    const campusInfo = CAMPUS_DATA[universityId] || CAMPUS_DATA['uw'];

    // Build system instruction
    const systemInstruction = `You are "${campusInfo.personaName}", an AI assistant for ${campusInfo.name}. 
You help students navigate campus life, find resources, and answer questions about the university.
Be friendly, helpful, and conversational. Keep responses concise but informative.
${userContext ? `\nUser context: ${userContext}` : ''}

When a user asks about a PHYSICAL LOCATION on campus (like a building, library, food place), 
you MUST include a mapLocation object in your response with approximate coordinates.
If the question is not about a physical place, set mapLocation to null.`;

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

    // Start chat and send message
    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(userMessage);
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
