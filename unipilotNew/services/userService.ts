
import { UserStats, Badge } from '../types';
import { INITIAL_BADGES } from '../constants';

const STORAGE_KEY = 'campus_companion_stats';

export const getUserStats = (): UserStats => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = JSON.parse(stored);
    // Merge with INITIAL_BADGES to ensure new badges appear if code updates
    const mergedBadges = INITIAL_BADGES.map(initial => {
        const existing = parsed.badges.find((b: Badge) => b.id === initial.id);
        return existing || initial;
    });
    return { ...parsed, badges: mergedBadges };
  }
  return {
    points: 0,
    level: 1,
    badges: INITIAL_BADGES,
    topicCounts: {},
    interactionsCount: 0
  };
};

const saveStats = (stats: UserStats) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export const processUserInteraction = (text: string): { stats: UserStats, newBadges: Badge[] } => {
  const stats = getUserStats();
  const newBadges: Badge[] = [];
  
  // 1. Update counts
  stats.interactionsCount += 1;
  stats.points += 10;

  // Level up every 50 points
  const newLevel = Math.floor(stats.points / 50) + 1;
  stats.level = newLevel;

  // 2. Topic tracking (Simple keyword matching)
  const lowerText = text.toLowerCase();
  const topics = [
    { key: 'library', words: ['library', 'study', 'quiet', 'book'] },
    { key: 'food', words: ['food', 'eat', 'hungry', 'cafe', 'coffee', 'starbucks', 'tim hortons'] },
    { key: 'wellness', words: ['gym', 'health', 'counselling', 'doctor', 'sick'] },
    { key: 'social', words: ['club', 'party', 'event', 'friend'] },
    { key: 'admin', words: ['registrar', 'enroll', 'transcript', 'fee', 'money'] }
  ];

  topics.forEach(topic => {
    if (topic.words.some(w => lowerText.includes(w))) {
        stats.topicCounts[topic.key] = (stats.topicCounts[topic.key] || 0) + 1;
    }
  });

  // 3. Check Badges
  
  // "Orientation Week" - First question
  if (stats.interactionsCount >= 1 && !stats.badges.find(b => b.id === 'freshman')?.unlocked) {
    const badge = stats.badges.find(b => b.id === 'freshman');
    if (badge) {
        badge.unlocked = true;
        newBadges.push(badge);
    }
  }

  // "Night Owl" - After 10pm or before 5am
  const hour = new Date().getHours();
  if ((hour >= 22 || hour < 5) && !stats.badges.find(b => b.id === 'night_owl')?.unlocked) {
    const badge = stats.badges.find(b => b.id === 'night_owl');
    if (badge) {
        badge.unlocked = true;
        newBadges.push(badge);
    }
  }

  // "Campus Explorer" - 3+ topics explored
  const uniqueTopics = Object.keys(stats.topicCounts).length;
  if (uniqueTopics >= 3 && !stats.badges.find(b => b.id === 'explorer')?.unlocked) {
    const badge = stats.badges.find(b => b.id === 'explorer');
    if (badge) {
        badge.unlocked = true;
        newBadges.push(badge);
    }
  }

  // "Scholar" - Level 5
  if (stats.level >= 5 && !stats.badges.find(b => b.id === 'scholar')?.unlocked) {
    const badge = stats.badges.find(b => b.id === 'scholar');
    if (badge) {
        badge.unlocked = true;
        newBadges.push(badge);
    }
  }

  saveStats(stats);
  return { stats, newBadges };
};

export const generateUserContextSummary = (stats: UserStats): string => {
  const favoriteTopic = Object.entries(stats.topicCounts)
    .sort(([,a], [,b]) => b - a)[0];
  
  const topicStr = favoriteTopic ? `They seem interested in ${favoriteTopic[0]} related queries.` : '';
  
  let timeHabit = "";
  const hour = new Date().getHours();
  if (hour >= 22) timeHabit = "It is late at night. The user might be tired or cramming.";
  
  return `User Level: ${stats.level}. ${topicStr} ${timeHabit}`;
};
