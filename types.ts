
export enum Sender {
  USER = 'user',
  AI = 'ai'
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
  mapLocation?: {
    lat: number;
    lng: number;
    name: string;
  };
}

export interface ChatSession {
  id: string;
  title: string;
  universityId: string;
  messages: Message[];
  lastModified: number;
}

export interface UniversityProfile {
  id: string;
  name: string;
  shortName: string;
  personaName: string;
  themeColor: string; // Tailwind class like 'blue-600'
  secondaryColor: string; // Tailwind class like 'blue-100'
  logoEmoji: string;
  logoPath: string; // Path to logo image
  auroraColors: string[]; // Array of 3 hex colors for Aurora background
  welcomeMessage: string;
  styleGuide: string; // Specific instruction for the AI persona tone
  campusName: string; // e.g. "St. George Campus", "Main Campus"
  campusCoordinates: [number, number]; // [lat, lng] for campus center
}

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Academic' | 'Social' | 'Career' | 'Wellness';
}

export interface MultiFaithSpace {
  id: string;
  name: string;
  location: string;
  description: string;
  amenities: string[]; // e.g. "Wudhu station", "Mats provided"
  hours: string;
  contact?: string;
}

export interface CampusData {
  locations: {
    name: string;
    type: string;
    description: string;
    features: string[];
    hours?: string;
    coordinates?: [number, number]; // [lat, lng]
  }[];
  resources: {
    name: string;
    contact: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  events: CampusEvent[];
  multiFaithSpaces: MultiFaithSpace[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  conditionDescription: string;
}

export interface UserStats {
  experience: number;
  level: number;
  badges: Badge[];
  topicCounts?: Record<string, number>; // Legacy local storage format
  topicsExplored?: string[]; // Supabase format
  messagesCount: number;
  nextLevelXP?: number;
}
