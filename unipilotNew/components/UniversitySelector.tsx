import React from 'react';
import { UniversityProfile } from '../types';
import { ChevronDown } from 'lucide-react';

interface Props {
  universities: UniversityProfile[];
  selectedId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const UniversitySelector: React.FC<Props> = ({ universities, selectedId, onSelect, isOpen, setIsOpen }) => {
  const selectedUni = universities.find(u => u.id === selectedId) || universities[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
      >
        <span className="text-xl">{selectedUni.logoEmoji}</span>
        <span className="font-semibold text-gray-800">{selectedUni.shortName}</span>
        <ChevronDown size={16} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-1">
            {universities.map((uni) => (
              <button
                key={uni.id}
                onClick={() => {
                  onSelect(uni.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                  selectedId === uni.id ? 'bg-gray-50 border-l-4 border-' + uni.themeColor : 'border-l-4 border-transparent'
                }`}
              >
                <span className="text-xl">{uni.logoEmoji}</span>
                <div>
                  <p className="font-medium text-gray-900">{uni.name}</p>
                  <p className="text-xs text-gray-500">{uni.personaName}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversitySelector;