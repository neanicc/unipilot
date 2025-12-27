
import React from 'react';
import { X, Zap, Map, MessageCircle, Award, Cpu, Calendar, Heart } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="bg-black/90 backdrop-blur-xl w-full max-w-2xl rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-4 duration-300 border border-white/20"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">About Campus Companion</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-md transition-colors">
            <X size={24} className="text-white/60" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Campus Companion is your intelligent, interactive guide to university life. 
            Forget searching through outdated wikis or endless Reddit threads—get instant, accurate answers about your specific campus.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
             {/* Feature Cards */}
             <div className="p-4 bg-blue-500/10 rounded-md border border-blue-500/30">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/20 rounded-md text-blue-400"><MessageCircle size={20} /></div>
                    <h3 className="font-bold text-white">AI Personas</h3>
                </div>
                <p className="text-sm text-white/60">Chat with distinct personalities for <strong className="text-white/80">UW, UofT, McMaster, Western, Queen's, and TMU</strong>.</p>
             </div>

             <div className="p-4 bg-amber-500/10 rounded-md border border-amber-500/30">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-500/20 rounded-md text-amber-400"><Award size={20} /></div>
                    <h3 className="font-bold text-white">Gamification</h3>
                </div>
                <p className="text-sm text-white/60">Earn points, unlock badges (like "Night Owl"), and level up as you explore campus resources.</p>
             </div>

             <div className="p-4 bg-green-500/10 rounded-md border border-green-500/30">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-500/20 rounded-md text-green-400"><Map size={20} /></div>
                    <h3 className="font-bold text-white">Interactive Maps</h3>
                </div>
                <p className="text-sm text-white/60">Ask "Where is the library?" and get an embedded, interactive map pointing you exactly where to go.</p>
             </div>

             <div className="p-4 bg-pink-500/10 rounded-md border border-pink-500/30">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-pink-500/20 rounded-md text-pink-400"><Calendar size={20} /></div>
                    <h3 className="font-bold text-white">Event Alerts</h3>
                </div>
                <p className="text-sm text-white/60">Switch to the Events tab to see upcoming workshops and socials, summarized weekly by the AI.</p>
             </div>
             
             <div className="p-4 bg-red-500/10 rounded-md border border-red-500/30 md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-500/20 rounded-md text-red-400"><Heart size={20} /></div>
                    <h3 className="font-bold text-white">New! Multi-Faith Spaces</h3>
                </div>
                <p className="text-sm text-white/60">We've added a dedicated tab to find prayer rooms, meditation spaces, and multi-faith centres on every supported campus.</p>
             </div>

             <div className="p-4 bg-purple-500/10 rounded-md border border-purple-500/30 md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-md text-purple-400"><Zap size={20} /></div>
                    <h3 className="font-bold text-white">Study Buddy</h3>
                </div>
                <p className="text-sm text-white/60">The AI adapts to your habits, offering personalized study tips based on your interaction history.</p>
             </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                <Cpu size={20} className="text-purple-400" />
                How it works
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
                Campus Companion uses <strong className="text-white/80">Google's Gemini 2.5 Flash</strong> model to process natural language queries. 
                We inject structured campus data (libraries, hours, resources) directly into the AI's context, ensuring answers are factually accurate while maintaining a conversational tone.
            </p>
            <p className="text-white/40 text-xs">
                Built with React, Tailwind CSS, and Leaflet.
            </p>
          </div>

        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-end">
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-md font-medium transition-colors"
            >
                Got it
            </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
