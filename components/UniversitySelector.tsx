import React, { useState } from 'react';
import { UniversityProfile } from '../types';
import { ChevronDown } from 'lucide-react';

interface Props {
  universities: UniversityProfile[];
  selectedId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const UniversityLogo: React.FC<{ uni: UniversityProfile; size?: number }> = ({ uni, size = 24 }) => {
  const [imgError, setImgError] = useState(false);
  
  if (imgError) {
    return <span className="text-xl">{uni.logoEmoji}</span>;
  }
  
  return (
    <img 
      src={uni.logoPath} 
      alt={`${uni.shortName} logo`}
      className="university-logo"
      style={{ width: size, height: size }}
      onError={() => setImgError(true)}
    />
  );
};

const UniversitySelector: React.FC<Props> = ({ universities, selectedId, onSelect, isOpen, setIsOpen }) => {
  const selectedUni = universities.find(u => u.id === selectedId) || universities[0];

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="relative" onClick={handleDropdownClick}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center space-x-2 px-4 py-2 rounded-md shadow-lg transition-colors bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25"
      >
        <UniversityLogo uni={selectedUni} size={24} />
        <span className="font-semibold text-white">{selectedUni.shortName}</span>
        <ChevronDown size={16} className={`transition-transform text-white/70 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-64 rounded-md shadow-xl border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 bg-black/95 backdrop-blur-xl border-white/25"
          style={{ zIndex: 9999 }}
        >
          <div className="py-2">
            {universities.map((uni) => (
              <button
                key={uni.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(uni.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-colors ${
                  selectedId === uni.id 
                    ? 'bg-white/20' 
                    : 'hover:bg-white/10'
                }`}
              >
                <UniversityLogo uni={uni} size={28} />
                <div>
                  <p className="font-semibold text-white">{uni.name}</p>
                  <p className="text-xs text-white/60">{uni.personaName}</p>
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