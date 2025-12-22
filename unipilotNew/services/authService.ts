
import { API_BASE_URL } from '../constants';

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  const data = await response.json();
  localStorage.setItem('token', data.access_token);
  return data;
};

export const register = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed. Email might be taken.');
  }

  const data = await response.json();
  localStorage.setItem('token', data.access_token);
  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => !!localStorage.getItem('token');
