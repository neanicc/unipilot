import React from 'react';
import { Message, Sender, UniversityProfile } from '../types';
import { Bot, User, MapPin } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import MapComponent from './MapComponent';

interface Props {
  message: Message;
  university: UniversityProfile;
}

const MessageBubble: React.FC<Props> = ({ message, university }) => {
  const isUser = message.sender === Sender.USER;
  
  // Dynamic color mapping helper
  const getThemeColor = (colorName: string) => {
      const map: Record<string, string> = {
          'amber-500': 'bg-amber-500',
          'blue-700': 'bg-blue-700',
          'red-800': 'bg-red-800',
      };
      return map[colorName] || 'bg-gray-800';
  };

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div className={`flex max-w-[95%] md:max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
          isUser ? 'bg-gray-200' : getThemeColor(university.themeColor) + ' text-white'
        }`}>
          {isUser ? <User size={16} className="text-gray-600" /> : <span className="text-sm">{university.logoEmoji}</span>}
        </div>

        {/* Content Container */}
        <div className={`flex flex-col space-y-2 w-full`}>
            {/* Bubble */}
            <div className={`px-5 py-4 rounded-2xl shadow-sm ${
            isUser 
                ? 'bg-gray-900 text-white rounded-tr-none' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
            }`}>
            {isUser ? (
                <p className="text-sm">{message.text}</p>
            ) : (
                <div>
                    <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">{university.personaName}</p>
                    <MarkdownRenderer content={message.text} />
                </div>
            )}
            </div>

            {/* Interactive Map Embed */}
            {!isUser && message.mapLocation && (
                <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 px-2 pt-1">
                        <MapPin size={14} className={`text-${university.themeColor}`} />
                        <span className="text-xs font-semibold text-gray-500">Location: {message.mapLocation.name}</span>
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