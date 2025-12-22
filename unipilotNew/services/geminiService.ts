
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { Message, Sender, CampusEvent } from '../types';
import { DATA_UW, DATA_UOFT, DATA_MAC, DATA_WESTERN, DATA_QUEENS, DATA_TMU } from './campusData';
import { USE_BACKEND } from '../constants';
import { chatWithBackend, summarizeEventsBackend } from './apiService';

// Initialize Gemini Client (Client Side)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
  
  // --- BACKEND MODE ---
  if (USE_BACKEND) {
    try {
        return await chatWithBackend(universityId, userMessage, history, userContext, sessionId);
    } catch (e) {
        console.warn("Backend failed", e);
        return { text: "Error connecting to UniPilot Backend. Please ensure the Python server is running." };
    }
  }

  // --- CLIENT SIDE MODE (DEMO) ---
  const campusData = getCampusDataForId(universityId);
  const dataContext = JSON.stringify(campusData, null, 2);

  const displayMapTool: FunctionDeclaration = {
    name: "display_map",
    description: "Display an interactive map of a specific campus location.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        location_name: {
          type: Type.STRING,
          description: "The name of the location to find on the map."
        }
      },
      required: ["location_name"]
    }
  };

  const systemInstruction = `
    You are ${personaName}, an AI assistant for ${universityId}.
    Style Guide: ${styleGuide}
    User Context: ${userContext}
    Data: ${dataContext}
    Guidelines: 1. Accurate. 2. Markdown. 3. Use display_map for locations.
  `;

  try {
    const recentHistory = history.slice(-5).map(msg => ({
      role: msg.sender === Sender.USER ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    let response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...recentHistory,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        tools: [{ functionDeclarations: [displayMapTool] }]
      }
    });

    let mapLocation = undefined;
    let finalText = response.text || "";

    const functionCalls = response.functionCalls;
    
    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];
      
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

        response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
                ...recentHistory,
                { role: 'user', parts: [{ text: userMessage }] },
                { role: 'model', parts: [{ functionCall: call }] },
                { role: 'user', parts: [{ functionResponse: { name: call.name, response: toolResult } }] }
            ],
            config: { systemInstruction }
        });
        
        finalText = response.text || "";
      }
    }

    return {
        text: finalText || "I'm having trouble generating a response right now.",
        mapLocation
    };

  } catch (error) {
    return { text: "Connection Error." };
  }
};

export const generateEventSummary = async (
  universityName: string,
  events: CampusEvent[],
  personaName: string,
  styleGuide: string
): Promise<string> => {
  
  if (USE_BACKEND) {
    return await summarizeEventsBackend(universityName, events);
  }
  return "Client side summary disabled for now.";
};
