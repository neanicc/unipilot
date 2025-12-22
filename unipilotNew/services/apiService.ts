
import { Message, CampusEvent } from '../types';
import { API_BASE_URL } from '../constants';
import { getToken } from './authService';

const getHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

export const chatWithBackend = async (
  universityId: string,
  userMessage: string,
  history: Message[],
  userContext: string,
  sessionId: string | null
): Promise<{ text: string; mapLocation?: { lat: number; lng: number; name: string } }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        universityId,
        userMessage,
        history,
        userContext,
        sessionId // Pass session ID for database persistence
      })
    });

    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.reload();
        throw new Error("Unauthorized");
    }

    if (!response.ok) {
      throw new Error('Backend error');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const summarizeEventsBackend = async (universityId: string, events: CampusEvent[]): Promise<string> => {
    try {
        const response = await fetch(`${API_BASE_URL}/events/summarize`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({
                university_id: universityId,
                events: events
            })
        });
        const data = await response.json();
        return data.summary;
    } catch (error) {
        console.error("API Error:", error);
        return "Unable to generate summary via backend.";
    }
};
