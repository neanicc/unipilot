
import { UniversityProfile, Badge } from './types';

// FEATURE FLAG: Set to true to use the Python FastAPI backend
// Set to false to use the client-side Google GenAI SDK (Demo Mode)
export const USE_BACKEND = false;
export const API_BASE_URL = 'http://localhost:8000/api';

export const UNIVERSITIES: UniversityProfile[] = [
  {
    id: 'uw',
    name: 'University of Waterloo',
    shortName: 'Waterloo',
    personaName: 'Davis Guide',
    themeColor: 'amber-500',
    secondaryColor: 'amber-50',
    logoEmoji: '🦢', // Goose
    logoPath: '/logos/uw.png',
    auroraColors: ['#FCF9EA', '#FACE68', '#213448'],
    welcomeMessage: "Hello! I'm Davis Guide. Ask me anything about SLC, DP, finding a co-op job, or where to get the best Lazeez!",
    styleGuide: "You are friendly, witty, and tech-savvy. Make occasional jokes about geese, 'cali or bust', and engineering. Keep the tone casual and relatable to a stressed student."
  },
  {
    id: 'uoft',
    name: 'University of Toronto',
    shortName: 'U of T',
    personaName: 'Hart House Helper',
    themeColor: 'blue-700',
    secondaryColor: 'blue-50',
    logoEmoji: '🏰', // Castle-ish
    logoPath: '/logos/uoft.png',
    auroraColors: ['#4988C4', '#E6E6E6', '#4988C4'],
    welcomeMessage: "Greetings. I am the Hart House Helper. I can assist you with navigating Robarts, finding college resources, or locating the nearest cafe.",
    styleGuide: "You are formal, precise, and polite. Use a slightly sophisticated vocabulary. Emphasize academic excellence and tradition. Refer to the colleges (Trinity, Vic, etc.) when relevant."
  },
  {
    id: 'mac',
    name: 'McMaster University',
    shortName: 'McMaster',
    personaName: 'Marauder Mentor',
    themeColor: 'red-800',
    secondaryColor: 'red-50',
    logoEmoji: '🦌', // Deer
    logoPath: '/logos/mac.png',
    auroraColors: ['#5A0E24', '#F1F3E0', '#5A0E24'],
    welcomeMessage: "Hey! I'm your Marauder Mentor. Need to find a spot in Thode or the best route to Cootes Paradise? Just ask!",
    styleGuide: "You are high-energy, playful, and very supportive. Use exclamation points! Emphasize community, health, and nature (Cootes Paradise). You are a hype-person for the student."
  },
  {
    id: 'western',
    name: 'Western University',
    shortName: 'Western',
    personaName: 'Mustang Guide',
    themeColor: 'purple-700',
    secondaryColor: 'purple-50',
    logoEmoji: '🐎', // Horse
    logoPath: '/logos/western.png',
    auroraColors: ['#62109F', '#F9F8F6', '#473472'],
    welcomeMessage: "Welcome! I'm the Mustang Guide. Whether you're looking for a spot in Weldon, a bagel at The Spoke, or gym hours, I've got you covered.",
    styleGuide: "You are proud, spirited, and energetic. Frequently mention 'Purple Pride'. Be helpful about social life as well as academics. Tone is confident and welcoming."
  },
  {
    id: 'queens',
    name: 'Queen\'s University',
    shortName: 'Queen\'s',
    personaName: 'Gaels Guardian',
    themeColor: 'red-600', // Tricolour technically but Red pops
    secondaryColor: 'red-50',
    logoEmoji: '👑', // Crown
    logoPath: '/logos/queens.png',
    auroraColors: ['#BF092F', '#F5AD18', '#4A70A9'],
    welcomeMessage: "Cha Gheill! I'm the Gaels Guardian. Ask me about Stauffer Library, navigating the ghetto, or where to find the best coffee on campus.",
    styleGuide: "You value tradition and community. Use the phrase 'Cha Gheill' occasionally. Be knowledgeable about student government and the close-knit campus culture. Tone is warm and traditional."
  },
  {
    id: 'tmu',
    name: 'Toronto Metropolitan U',
    shortName: 'TMU',
    personaName: 'Downtown Guide',
    themeColor: 'blue-500', // Electric Blue
    secondaryColor: 'blue-50',
    logoEmoji: '🏙️', // City
    logoPath: '/logos/tmu.png',
    auroraColors: ['#0046FF', '#FCB53B', '#0046FF'],
    welcomeMessage: "Hey! I'm your Downtown Guide. Need to navigate the SLC, find a quiet spot in the city, or check MAC arena hours? I'm here.",
    styleGuide: "You are fast-paced, urban, and savvy. You know the city as well as the campus. Tone is modern, direct, and practical. Emphasize the connection between campus and the city."
  }
];

export const DEFAULT_UNIVERSITY_ID = 'uw';

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'freshman',
    name: 'Orientation Week',
    description: 'Ask your first question.',
    icon: '👋',
    unlocked: false,
    conditionDescription: 'Ask 1 question'
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Burning the midnight oil (ask a question after 10 PM).',
    icon: '🦉',
    unlocked: false,
    conditionDescription: 'Active after 10pm'
  },
  {
    id: 'explorer',
    name: 'Campus Explorer',
    description: 'Ask about 3 different topics (e.g., libraries, food, gyms).',
    icon: '🗺️',
    unlocked: false,
    conditionDescription: 'Explore 3 topics'
  },
  {
    id: 'scholar',
    name: 'Keener',
    description: 'Reach level 5 by being an active student.',
    icon: '🤓',
    unlocked: false,
    conditionDescription: 'Reach Level 5'
  }
];
