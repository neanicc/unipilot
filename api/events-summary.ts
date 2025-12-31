import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const getAI = () => {
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
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

interface CampusEvent {
    title: string;
    date: string;
    description: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { universityName, events, personaName, styleGuide } = req.body;

        if (!universityName || !events || !personaName) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const ai = getAI();

        const prompt = `
      You are ${personaName}, an enthusiastic guide for ${universityName}.
      
      Task: Write a brief, exciting weekly briefing summarizing these campus events for a student.
      
      Events List:
      ${(events as CampusEvent[]).map(e => `- ${e.title} (${e.date}): ${e.description}`).join('\n')}
      
      Style Guide: ${styleGuide || 'Be enthusiastic and helpful.'}
      
      Format:
      ## 📅 Campus Pulse
      [1 paragraph summary of vibes]
      
      🔥 Highlights
      - [Event 1]
      - [Event 2]
      
      Keep it under 150 words.
    `;

        const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await retryWithBackoff(() => model.generateContent(prompt));
        const summary = result.response.text();

        return res.status(200).json({ summary });

    } catch (error: any) {
        console.error('Event Summary Error:', error);

        const errorMessage = error.message || error.toString();

        if (errorMessage.includes('429') || errorMessage.includes('quota')) {
            return res.status(429).json({
                error: 'Rate limit exceeded',
                summary: 'Rate limit exceeded. Check out the events below!'
            });
        }

        return res.status(500).json({
            error: errorMessage,
            summary: 'Check out the events below!'
        });
    }
}
