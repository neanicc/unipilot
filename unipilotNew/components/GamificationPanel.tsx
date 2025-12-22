
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
  const progress = (stats.points % 50) / 50 * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end transition-opacity">
      <div className="bg-white w-full max-w-md h-full shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              Student Progress
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Level Card */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white mb-8 shadow-lg">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-indigo-100 font-medium">Current Level</p>
                <p className="text-4xl font-bold">{stats.level}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{stats.points}</p>
                <p className="text-indigo-100 text-sm">Total Points</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 opacity-80">
                <span>Progress to Level {stats.level + 1}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-black/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Badges Grid */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.badges.map((badge) => (
              <div 
                key={badge.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  badge.unlocked 
                    ? 'border-yellow-400 bg-yellow-50' 
                    : 'border-gray-100 bg-gray-50 opacity-60 grayscale'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-bold text-gray-900 text-sm">{badge.name}</p>
                <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
                {!badge.unlocked && (
                    <p className="text-[10px] text-gray-400 mt-2 italic">Locked: {badge.conditionDescription}</p>
                )}
              </div>
            ))}
          </div>
          
          {/* Study Stats */}
          <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Study Interests</h3>
              {Object.keys(stats.topicCounts).length === 0 ? (
                  <p className="text-gray-500 text-sm italic">Ask questions to track your interests!</p>
              ) : (
                  <div className="flex flex-wrap gap-2">
                      {Object.entries(stats.topicCounts).map(([topic, count]) => (
                          <div key={topic} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 capitalize">
                              {topic}: {count}
                          </div>
                      ))}
                  </div>
              )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GamificationPanel;
