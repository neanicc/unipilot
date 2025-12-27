
import React, { useState } from 'react';
import { CampusEvent, UniversityProfile } from '../types';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { generateEventSummary } from '../services/geminiService';
import MarkdownRenderer from './MarkdownRenderer';
import GlareHover from './GlareHover';

interface Props {
  events: CampusEvent[];
  university: UniversityProfile;
}

const EventsTab: React.FC<Props> = ({ events, university }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);

  // Clear summary when switching universities
  React.useEffect(() => {
    setSummary(null);
    setIsLoadingSummary(false);
  }, [university.id]);

  const handleGenerateSummary = async () => {
    setIsLoadingSummary(true);
    try {
      const text = await generateEventSummary(
        university.name,
        events,
        university.personaName,
        university.styleGuide
      );
      setSummary(text);
    } catch (e) {
      setSummary("Sorry, I couldn't generate a summary right now.");
    } finally {
      setIsLoadingSummary(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Career': return 'bg-blue-500/30 text-blue-300 border-blue-400/30';
      case 'Social': return 'bg-amber-500/30 text-amber-300 border-amber-400/30';
      case 'Wellness': return 'bg-green-500/30 text-green-300 border-green-400/30';
      case 'Academic': return 'bg-purple-500/30 text-purple-300 border-purple-400/30';
      default: return 'bg-white/20 text-white/80 border-white/30';
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">

      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Calendar className="text-purple-400" />
          Upcoming Events
        </h2>
        <p className="text-white/60 text-sm mt-1">Don't miss out on what's happening at {university.shortName}.</p>
      </div>

      {/* AI Summary Section */}
      <div className="mb-8 bg-black/50 backdrop-blur-md p-1 rounded-md border border-white/20 shadow-lg">
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-md">
          {!summary && !isLoadingSummary && (
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Need a quick update?</h3>
                <p className="text-xs text-white/60">Ask {university.personaName} to summarize the week.</p>
              </div>
              <button
                onClick={handleGenerateSummary}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-500 transition-all shadow-md active:scale-95"
              >
                <Sparkles size={16} />
                Get AI Briefing
              </button>
            </div>
          )}

          {isLoadingSummary && (
            <div className="flex items-center justify-center py-4 space-x-2 text-white/60">
              <Sparkles className="animate-pulse text-purple-400" size={20} />
              <span className="text-sm font-medium">Generating insights...</span>
            </div>
          )}

          {summary && (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">AI Insight from {university.personaName}</span>
              </div>
              <MarkdownRenderer content={summary} textColorClass="text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.length === 0 ? (
          <div className="text-center py-10 text-white/40">
            <p>No upcoming events found.</p>
          </div>
        ) : (
          events.map(event => (
            <GlareHover
              key={event.id}
              background="rgba(0, 0, 0, 0.6)"
              borderRadius="8px"
              borderColor="rgba(255, 255, 255, 0.2)"
              glareColor="#ffffff"
              glareOpacity={0.2}
            >
              <div className="w-full p-5 text-left">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">{event.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                <p className="text-sm text-white/70 mb-4 leading-relaxed">{event.description}</p>

                <div className="flex items-center gap-4 text-xs text-white/50">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </GlareHover>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsTab;
