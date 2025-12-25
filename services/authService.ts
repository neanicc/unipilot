// src/services/authService.ts

import { supabase } from './supabaseClient';
import { Session, AuthChangeEvent } from '@supabase/supabase-js';

/**
 * Register a new user with email, password, name, and university
 */
export const register = async (email: string, password: string, name: string, universityId: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  // Update public profile with selected university
  if (data.user) {
    const { error: profileError } = await supabase
      .from('users')
      .update({ selected_university_id: universityId })
      .eq('id', data.user.id);

    if (profileError) {
      console.error('Error updating user profile:', profileError);
      // Don't throw here, as auth was successful
    }
  }

  return data;
};

/**
 * Get public user profile
 */
export const getUserProfile = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
  return data;
};

/**
 * Log in an existing user
 */
export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

/**
 * Log out the current user
 */
export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  // Reload the page to clear any cached state
  window.location.reload();
};

/**
 * Get the current user's session
 */
export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Error getting session:', error);
    return null;
  }

  return session;
};

/**
 * Get the current user
 */
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error getting user:', error);
    return null;
  }

  return user;
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = async (): Promise<boolean> => {
  const session = await getSession();
  return !!session;
};

/**
 * Get the current user's ID
 */
export const getUserId = async (): Promise<string | null> => {
  const user = await getCurrentUser();
  return user?.id || null;
};

/**
 * Listen for authentication state changes
 * Usage: 
 * const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
 *   console.log('Auth state changed:', event, session);
 * });
 */
export const onAuthStateChange = (callback: (event: AuthChangeEvent, session: Session | null) => void) => {
  return supabase.auth.onAuthStateChange(callback);
};

/**
 * Reset password for a user (sends email)
 */
export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { message: 'Password reset email sent!' };
};

/**
 * Update user password (when they're already logged in)
 */
export const updatePassword = async (newPassword: string) => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { message: 'Password updated successfully!' };
};

// Backward compatibility with old authService
// This maintains the same API as before
export const getToken = async () => {
  const session = await getSession();
  return session?.access_token || null;
};