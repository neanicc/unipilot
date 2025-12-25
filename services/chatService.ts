// src/services/chatService.ts

import { supabase } from './supabaseClient';
import { Message, ChatSession, Sender } from '../types';
import { getUserId } from './authService';

/**
 * Create a new chat session
 */
export const createChatSession = async (
    universityId: string,
    title: string = 'Untitled Chat'
): Promise<ChatSession | null> => {
    const userId = await getUserId();
    if (!userId) throw new Error('User not authenticated');

    const { data, error } = await supabase
        .from('chat_sessions')
        .insert({
            user_id: userId,
            university_id: universityId,
            title,
        })
        .select()
        .single();

    if (error) {
        console.error('Error creating chat session:', error);
        throw new Error(error.message);
    }

    return {
        id: data.id,
        universityId: data.university_id,
        title: data.title,
        messages: [],
        lastModified: data.last_modified,
    };
};

/**
 * Get all chat sessions for the current user
 */
export const getChatSessions = async (
    universityId?: string
): Promise<ChatSession[]> => {
    const userId = await getUserId();
    if (!userId) return [];

    let query = supabase
        .from('chat_sessions')
        .select('*')
        .eq('user_id', userId)
        .order('last_modified', { ascending: false });

    if (universityId) {
        query = query.eq('university_id', universityId);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching chat sessions:', error);
        return [];
    }

    // Fetch messages for each session
    const sessionsWithMessages = await Promise.all(
        data.map(async (session) => {
            const messages = await getSessionMessages(session.id);
            return {
                id: session.id,
                universityId: session.university_id,
                title: session.title,
                messages,
                lastModified: session.last_modified,
            };
        })
    );

    return sessionsWithMessages;
};

/**
 * Get a single chat session by ID
 */
export const getChatSession = async (
    sessionId: string
): Promise<ChatSession | null> => {
    const userId = await getUserId();
    if (!userId) return null;

    const { data, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('id', sessionId)
        .eq('user_id', userId)
        .single();

    if (error) {
        console.error('Error fetching chat session:', error);
        return null;
    }

    const messages = await getSessionMessages(sessionId);

    return {
        id: data.id,
        universityId: data.university_id,
        title: data.title,
        messages,
        lastModified: data.last_modified,
    };
};

/**
 * Update a chat session (e.g., change title)
 */
export const updateChatSession = async (
    sessionId: string,
    updates: { title?: string; universityId?: string }
): Promise<void> => {
    const userId = await getUserId();
    if (!userId) throw new Error('User not authenticated');

    const updateData: { title?: string; university_id?: string } = {};
    if (updates.title) updateData.title = updates.title;
    if (updates.universityId) updateData.university_id = updates.universityId;

    const { error } = await supabase
        .from('chat_sessions')
        .update(updateData)
        .eq('id', sessionId)
        .eq('user_id', userId);

    if (error) {
        console.error('Error updating chat session:', error);
        throw new Error(error.message);
    }
};

/**
 * Delete a chat session and all its messages
 */
export const deleteChatSession = async (sessionId: string): Promise<void> => {
    const userId = await getUserId();
    if (!userId) throw new Error('User not authenticated');

    const { error } = await supabase
        .from('chat_sessions')
        .delete()
        .eq('id', sessionId)
        .eq('user_id', userId);

    if (error) {
        console.error('Error deleting chat session:', error);
        throw new Error(error.message);
    }
};

/**
 * Get all messages for a session
 */
export const getSessionMessages = async (sessionId: string): Promise<Message[]> => {
    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching messages:', error);
        return [];
    }

    return data.map((msg) => ({
        id: msg.id,
        text: msg.text,
        sender: msg.sender as Sender,
        timestamp: new Date(msg.created_at),
    }));
};

/**
 * Add a message to a session
 */
export const addMessage = async (
    sessionId: string,
    text: string,
    sender: Sender
): Promise<Message | null> => {
    const { data, error } = await supabase
        .from('messages')
        .insert({
            session_id: sessionId,
            text,
            sender,
        })
        .select()
        .single();

    if (error) {
        console.error('Error adding message:', error);
        throw new Error(error.message);
    }

    // Update the session's last_modified timestamp
    await supabase
        .from('chat_sessions')
        .update({ last_modified: new Date().toISOString() })
        .eq('id', sessionId);

    return {
        id: data.id,
        text: data.text,
        sender: data.sender as Sender,
        timestamp: new Date(data.created_at),
    };
};

/**
 * Delete a specific message
 */
export const deleteMessage = async (messageId: string): Promise<void> => {
    const { error } = await supabase
        .from('messages')
        .delete()
        .eq('id', messageId);

    if (error) {
        console.error('Error deleting message:', error);
        throw new Error(error.message);
    }
};

/**
 * Generate a title for a chat session based on first message
 */
export const generateSessionTitle = (firstMessage: string): string => {
    const maxLength = 50;
    const cleaned = firstMessage.trim();

    if (cleaned.length <= maxLength) {
        return cleaned;
    }

    return cleaned.substring(0, maxLength) + '...';
};

/**
 * Update session title based on first user message
 */
export const updateSessionTitleFromMessage = async (
    sessionId: string,
    message: string
): Promise<void> => {
    const title = generateSessionTitle(message);
    await updateChatSession(sessionId, { title });
};

/**
 * Migrate local storage chat history to Supabase
 * Call this once after user logs in for the first time
 */
export const migrateLocalStorageToSupabase = async (): Promise<void> => {
    const userId = await getUserId();
    if (!userId) throw new Error('User not authenticated');

    // Get data from localStorage
    const stored = localStorage.getItem('campus_chat_history_v2');
    if (!stored) {
        console.log('No local storage data to migrate');
        return;
    }

    try {
        const localSessions: ChatSession[] = JSON.parse(stored);
        console.log(`Migrating ${localSessions.length} sessions...`);

        for (const session of localSessions) {
            // Create the session
            const newSession = await createChatSession(
                session.universityId,
                session.title
            );

            if (!newSession) continue;

            // Add all messages
            for (const message of session.messages) {
                await addMessage(newSession.id, message.text, message.sender);
            }
        }

        console.log('Migration complete!');
        // Optionally clear localStorage after successful migration
        // localStorage.removeItem('campus_chat_history_v2');
    } catch (error) {
        console.error('Error migrating data:', error);
        throw error;
    }
};