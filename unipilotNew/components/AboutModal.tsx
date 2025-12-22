
import React from 'react';
import { X, Zap, Map, MessageCircle, Award, Cpu, Calendar, Heart } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-2xl font-bold text-gray-900">About Campus Companion</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Campus Companion is your intelligent, interactive guide to university life. 
            Forget searching through outdated wikis or endless Reddit threads—get instant, accurate answers about your specific campus.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
             {/* Feature Cards */}
             <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><MessageCircle size={20} /></div>
                    <h3 className="font-bold text-gray-900">AI Personas</h3>
                </div>
                <p className="text-sm text-gray-600">Chat with distinct personalities for <strong>UW, UofT, McMaster, Western, Queen's, and TMU</strong>.</p>
             </div>

             <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-600"><Award size={20} /></div>
                    <h3 className="font-bold text-gray-900">Gamification</h3>
                </div>
                <p className="text-sm text-gray-600">Earn points, unlock badges (like "Night Owl"), and level up as you explore campus resources.</p>
             </div>

             <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600"><Map size={20} /></div>
                    <h3 className="font-bold text-gray-900">Interactive Maps</h3>
                </div>
                <p className="text-sm text-gray-600">Ask "Where is the library?" and get an embedded, interactive map pointing you exactly where to go.</p>
             </div>

             <div className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-pink-100 rounded-lg text-pink-600"><Calendar size={20} /></div>
                    <h3 className="font-bold text-gray-900">Event Alerts</h3>
                </div>
                <p className="text-sm text-gray-600">Switch to the Events tab to see upcoming workshops and socials, summarized weekly by the AI.</p>
             </div>
             
             <div className="p-4 bg-red-50 rounded-xl border border-red-100 md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-100 rounded-lg text-red-600"><Heart size={20} /></div>
                    <h3 className="font-bold text-gray-900">New! Multi-Faith Spaces</h3>
                </div>
                <p className="text-sm text-gray-600">We've added a dedicated tab to find prayer rooms, meditation spaces, and multi-faith centres on every supported campus.</p>
             </div>

             <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 md:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Zap size={20} /></div>
                    <h3 className="font-bold text-gray-900">Study Buddy</h3>
                </div>
                <p className="text-sm text-gray-600">The AI adapts to your habits, offering personalized study tips based on your interaction history.</p>
             </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Cpu size={20} />
                How it works
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Campus Companion uses <strong>Google's Gemini 2.5 Flash</strong> model to process natural language queries. 
                We inject structured campus data (libraries, hours, resources) directly into the AI's context, ensuring answers are factually accurate while maintaining a conversational tone.
            </p>
            <p className="text-gray-400 text-xs">
                Built with React, Tailwind CSS, and Leaflet.
            </p>
          </div>

        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
            >
                Got it
            </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
