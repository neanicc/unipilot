
import React from 'react';
import { UserStats } from '../types';
import { Trophy, Star, X } from 'lucide-react';

interface Props {
  stats: UserStats;
  isOpen: boolean;
  onClose: () => void;
}

const GamificationPanel: React.FC<Props> = ({ stats, isOpen, onClose }) => {
  if (!isOpen) return null;

  const nextLevelPoints = stats.level * 50;
  const progress = (stats.experience % 50) / 50 * 100;

  const getTopics = () => {
    if (stats.topicCounts && Object.keys(stats.topicCounts).length > 0) {
      return Object.entries(stats.topicCounts).map(([name, count]) => ({ name, count }));
    }
    if (stats.topicsExplored && stats.topicsExplored.length > 0) {
      return stats.topicsExplored.map(name => ({ name, count: 1 }));
    }
    return [];
  };

  const topics = getTopics();

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-end transition-opacity">
      <div className="bg-black/90 backdrop-blur-xl w-full max-w-md h-full shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-white/10">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Trophy className="text-yellow-400" />
              Student Progress
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-md transition-colors">
              <X size={24} className="text-white/60" />
            </button>
          </div>

          {/* Level Card */}
          <div className="bg-gradient-to-br from-purple-600/80 to-indigo-700/80 backdrop-blur-md rounded-md p-6 text-white mb-8 shadow-lg border border-white/20">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-white/70 font-medium">Current Level</p>
                <p className="text-4xl font-bold">{stats.level}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{stats.experience}</p>
                <p className="text-white/70 text-sm">Total XP</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 opacity-80">
                <span>Progress to Level {stats.level + 1}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Badges Grid */}
          <h3 className="text-lg font-semibold text-white mb-4">Achievements</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-md border transition-all ${badge.unlocked
                  ? 'border-yellow-400/50 bg-yellow-500/10'
                  : 'border-white/10 bg-white/5 opacity-60 grayscale'
                  }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-bold text-white text-sm">{badge.name}</p>
                <p className="text-xs text-white/60 mt-1">{badge.description}</p>
                {!badge.unlocked && (
                  <p className="text-[10px] text-white/40 mt-2 italic">Locked: {badge.conditionDescription}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationPanel;
