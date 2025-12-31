
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
          <h2 className="text-2xl font-bold text-white">About UniPilot</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-md transition-colors">
            <X size={24} className="text-white/60" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            UniPilot is your intelligent, interactive Campus Companion to university life, trained on YOUR universities data.
            Forget searching through outdated wikis or endless Reddit threads get instant, accurate answers about your specific campus.
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

            <div className="p-4 bg-red-500/10 rounded-md border border-red-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-500/20 rounded-md text-red-400"><Heart size={20} /></div>
                <h3 className="font-bold text-white">Multi-Faith Spaces</h3>
              </div>
              <p className="text-sm text-white/60">Find prayer rooms, meditation spaces, and multi-faith centres on every supported campus.</p>
            </div>

            <div className="p-4 bg-cyan-500/10 rounded-md border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-cyan-500/20 rounded-md text-cyan-400"><Map size={20} /></div>
                <h3 className="font-bold text-white">Campus Maps</h3>
              </div>
              <p className="text-sm text-white/60">Explore interactive campus maps with buildings, food spots, libraries, and key landmarks marked for easy navigation.</p>
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
        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-white/40 text-center mb-4">
            Created by{' '}
            <span className="relative inline-block group">
              <a href="https://linkedin.com/in/abdullahrajput1" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">@abrj7</a>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto whitespace-nowrap shadow-xl z-50">
                <a href="https://github.com/abrj7" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  github.com/abrj7
                </a>
              </span>
            </span>
            {' '}&{' '}
            <span className="relative inline-block group">
              <a href="https://www.linkedin.com/in/ali-intelligence/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">@neanicc</a>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto whitespace-nowrap shadow-xl z-50">
                <a href="https://github.com/neanicc" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  github.com/neanicc
                </a>
              </span>
            </span>
            {' '}— software eng students @ uwaterloo
          </p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-md font-medium transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
