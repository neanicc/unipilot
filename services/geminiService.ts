
import { GoogleGenerativeAI, SchemaType, type Tool, type Schema } from "@google/generative-ai";
import { Message, Sender, CampusEvent } from '../types';
import { DATA_UW, DATA_UOFT, DATA_MAC, DATA_WESTERN, DATA_QUEENS, DATA_TMU } from './campusData';
import { USE_BACKEND } from '../constants';
import { chatWithBackend, summarizeEventsBackend } from './apiService';

// Initialize Gemini Client (Client Side) - Lazy loaded to prevent crash if no API key
let ai: GoogleGenerativeAI | null = null;
const getAI = () => {
  if (!ai) {
    // Vite uses import.meta.env for environment variables
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_API_KEY || "";
    if (!apiKey) {
      console.warn("No Gemini API key found. Client-side AI features will not work.");
      return null;
    }
    ai = new GoogleGenerativeAI(apiKey);
  }
  return ai;
};

// Rate Limiter Utility
class RateLimiter {
  private lastRequestTime: number = 0;
  private minIntervalMs: number;

  constructor(requestsPerMinute: number) {
    this.minIntervalMs = (60 * 1000) / requestsPerMinute;
  }

  async throttle(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    if (timeSinceLastRequest < this.minIntervalMs) {
      const waitTime = this.minIntervalMs - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.lastRequestTime = Date.now();
  }
}

// Initialize global rate limiter (e.g., 6 RPM for strict free tier safety)
const rateLimiter = new RateLimiter(6);

// Retry utility with exponential backoff
const retryWithBackoff = async <T>(
  operation: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> => {
  try {
    await rateLimiter.throttle(); // Respect rate limits before trying
    return await operation();
  } catch (error: any) {
    const isQuotaError = error.message?.includes("429") || error.toString().includes("429");

    if (isQuotaError && retries > 0) {
      console.warn(`[Gemini] Quota hit (429). Retrying in ${delay}ms... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryWithBackoff(operation, retries - 1, delay * 2);
    }

    throw error;
  }
};

const getCampusDataForId = (id: string) => {
  switch (id) {
    case 'uw': return DATA_UW;
    case 'uoft': return DATA_UOFT;
    case 'mac': return DATA_MAC;
    case 'western': return DATA_WESTERN;
    case 'queens': return DATA_QUEENS;
    case 'tmu': return DATA_TMU;
    default: return DATA_UW;
  }
};

export const generateResponse = async (
  universityId: string,
  personaName: string,
  styleGuide: string,
  userContext: string,
  userMessage: string,
  history: Message[],
  sessionId: string | null = null
): Promise<{ text: string, mapLocation?: { lat: number, lng: number, name: string } }> => {

  // --- CLIENT SIDE MODE (DEFAULT) ---
  const genAI = getAI();
  if (!genAI) {
    return { text: "No API key configured. Please set the VITE_GEMINI_API_KEY environment variable in your .env file." };
  }

  const campusData = getCampusDataForId(universityId);
  const dataContext = JSON.stringify(campusData, null, 2);

  // Define tool using simple object structure compatible with SDK
  const displayMapTool: Tool = {
    functionDeclarations: [
      {
        name: "display_map",
        description: "Display an interactive map of a specific campus location.",
        parameters: {
          type: SchemaType.OBJECT,
          properties: {
            location_name: {
              type: SchemaType.STRING,
              description: "The name of the location to find on the map.",
              nullable: false
            }
          },
          required: ["location_name"]
        }
      }
    ]
  };

  const systemInstruction = `
    You are ${personaName}, an orientation leader and upper-year student guide for ${universityId}.
    
    CORE ASSUMPTION: The user does not know building names, shortcuts, or campus culture.
    
    YOUR GOAL: Explain what it is, where it is, why to go there, how to get there, and when it's best.

    🧠 UNIVERSAL RESPONSE TEMPLATE (STRICTLY FOLLOW THIS):
    1. One-sentence clear answer
    
    2. detailed_breakdown:
       - What it is (plain language)
       - Where it is (landmarks, nearby buildings)
       - Why people use it
       - Best time to go

    • Option 1 (if applicable)
    • Option 2 (if applicable)

    Helpful tip (access, hours, noise, food)
    
    Offer next action (map, directions, save, reminder)

    DATA CONTEXT:
    ${dataContext}

    USER CONTEXT:
    ${userContext}

    STYLE GUIDE:
    ${styleGuide}

    Always format nicely with Markdown. Use bolding for key terms.
  `;

  try {
    // Correct logic for @google/generative-ai
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction,
      tools: [displayMapTool]
    });

    // Prepare history: verify it starts with 'user'
    let rawHistory = history.slice(-6).map(msg => ({
      role: msg.sender === Sender.USER ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // If the first message is from the model, drop it
    if (rawHistory.length > 0 && rawHistory[0].role === 'model') {
      rawHistory = rawHistory.slice(1);
    }

    const chat = model.startChat({
      history: rawHistory
    });

    // Send the user message with RETRY Logic
    const result = await retryWithBackoff(() => chat.sendMessage(userMessage));
    const response = await result.response;
    let finalText = response.text(); // Standard method in new SDK

    let mapLocation = undefined;

    // Function calls handling
    const calls = response.functionCalls();

    if (calls && calls.length > 0) {
      const call = calls[0];

      if (call.name === 'display_map') {
        const locName = call.args['location_name'] as string;

        const location = campusData.locations.find(l =>
          l.name.toLowerCase().includes(locName.toLowerCase()) ||
          locName.toLowerCase().includes(l.name.toLowerCase())
        );

        let toolResult = { result: "Location not found." };

        if (location && location.coordinates) {
          mapLocation = {
            lat: location.coordinates[0],
            lng: location.coordinates[1],
            name: location.name
          };
          toolResult = { result: `Found: ${location.name}` };
        }

        // Send tool response with RETRY Logic
        const result2 = await retryWithBackoff(() => chat.sendMessage([
          {
            functionResponse: {
              name: 'display_map',
              response: toolResult
            }
          }
        ]));
        finalText = result2.response.text();
      }
    }

    return {
      text: finalText || "I'm having trouble generating a response right now. (Empty Response)",
      mapLocation
    };

  } catch (error) {
    if (error.toString().includes("429")) {
      return { text: "I'm receiving too many requests right now. Please try again in a few seconds." };
    }
    console.error("Gemini Error:", error);
    return { text: "Connection Error. Check console for details." };
  }
};

export const generateEventSummary = async (
  universityName: string,
  events: CampusEvent[],
  personaName: string,
  styleGuide: string
): Promise<string> => {

  // Client-Side Generation
  const genAI = getAI();
  if (!genAI) {
    return "Unable to generate summary: API Key missing.";
  }

  const prompt = `
    You are ${personaName}, an enthusiastic guide for ${universityName}.
    
    Task: Write a brief, exciting weekly briefing summarizing these campus events for a student.
    
    Events List:
    ${events.map(e => `- ${e.title} (${e.date}): ${e.description}`).join('\n')}
    
    Style Guide: ${styleGuide}
    
    Format:
    ## 📅 Campus Pulse
    [1 paragraph summary of vibes]
    
    🔥 Highlights
    - [Event 1]
    - [Event 2]
    
    Keep it under 150 words.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await retryWithBackoff(() => model.generateContent(prompt));
    return result.response.text();
  } catch (e: any) {
    if (e.toString().includes("429")) {
      return "Rate limit exceeded. Please try again later.";
    }
    console.error("Event Summary Error:", e);
    return "Check out the events below!";
  }
};
