import React, { useState } from 'react';
import { Message, Sender, UniversityProfile } from '../types';
import { Bot, User, MapPin } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import MapComponent from './MapComponent';

interface Props {
  message: Message;
  university: UniversityProfile;
}

const UniversityAvatar: React.FC<{ university: UniversityProfile }> = ({ university }) => {
  const [imgError, setImgError] = useState(false);
  
  if (imgError) {
    return <span className="text-sm">{university.logoEmoji}</span>;
  }
  
  return (
    <img 
      src={university.logoPath} 
      alt={`${university.shortName} logo`}
      className="w-5 h-5 object-contain"
      onError={() => setImgError(true)}
    />
  );
};

const MessageBubble: React.FC<Props> = ({ message, university }) => {
  const isUser = message.sender === Sender.USER;
  
  // Dynamic color mapping helper
  const getThemeColor = (colorName: string) => {
      const map: Record<string, string> = {
          'amber-500': 'bg-amber-500',
          'blue-700': 'bg-blue-700',
          'red-800': 'bg-red-800',
          'purple-700': 'bg-purple-700',
          'red-600': 'bg-red-600',
          'blue-500': 'bg-blue-500',
      };
      return map[colorName] || 'bg-purple-600';
  };

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div className={`flex max-w-[95%] md:max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center shadow-lg ${
          isUser 
            ? 'bg-white/25 backdrop-blur-md border border-white/30'
            : getThemeColor(university.themeColor) + ' text-white'
        }`}>
          {isUser ? <User size={16} className="text-white" /> : <UniversityAvatar university={university} />}
        </div>

        {/* Content Container */}
        <div className={`flex flex-col space-y-2 w-full`}>
            {/* Bubble */}
            <div className={`px-5 py-4 rounded-md shadow-lg ${
            isUser 
                ? 'bg-white/25 backdrop-blur-md border border-white/30 text-white'
                : 'bg-black/70 backdrop-blur-xl border border-white/25 text-white'
            }`}>
            {isUser ? (
                <p className="text-sm text-white font-medium">{message.text}</p>
            ) : (
                <div className="text-white">
                    <p className="text-xs font-bold mb-2 uppercase tracking-wide text-white/80">{university.personaName}</p>
                    <MarkdownRenderer content={message.text} />
                </div>
            )}
            </div>

            {/* Interactive Map Embed */}
            {!isUser && message.mapLocation && (
                <div className="p-2 rounded-md border shadow-sm bg-black/60 backdrop-blur-md border-white/20">
                    <div className="flex items-center gap-2 px-2 pt-1">
                        <MapPin size={14} className="text-purple-400" />
                        <span className="text-xs font-semibold text-white/60">Location: {message.mapLocation.name}</span>
                    </div>
                    <MapComponent 
                        lat={message.mapLocation.lat} 
                        lng={message.mapLocation.lng} 
                        locationName={message.mapLocation.name} 
                    />
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default MessageBubble;