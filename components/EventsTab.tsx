
import React, { useState } from 'react';
import { CampusEvent, UniversityProfile } from '../types';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { generateEventSummary } from '../services/geminiService';
import MarkdownRenderer from './MarkdownRenderer';

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
      case 'Career': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Social': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Wellness': return 'bg-green-100 text-green-800 border-green-200';
      case 'Academic': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">

      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Calendar className={`text-${university.themeColor}`} />
          Upcoming Events
        </h2>
        <p className="text-gray-500 text-sm mt-1">Don't miss out on what's happening at {university.shortName}.</p>
      </div>

      {/* AI Summary Section */}
      <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-1 rounded-2xl border border-indigo-100 shadow-sm">
        <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl">
          {!summary && !isLoadingSummary && (
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Need a quick update?</h3>
                <p className="text-xs text-gray-500">Ask {university.personaName} to summarize the week.</p>
              </div>
              <button
                onClick={handleGenerateSummary}
                className={`flex items-center gap-2 px-4 py-2 bg-${university.themeColor} text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md active:scale-95`}
              >
                <Sparkles size={16} />
                Get AI Briefing
              </button>
            </div>
          )}

          {isLoadingSummary && (
            <div className="flex items-center justify-center py-4 space-x-2 text-gray-500">
              <Sparkles className="animate-pulse text-purple-500" size={20} />
              <span className="text-sm font-medium">Generating insights...</span>
            </div>
          )}

          {summary && (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">AI Insight from {university.personaName}</span>
              </div>
              <MarkdownRenderer content={summary} textColorClass="text-gray-700" />
            </div>
          )}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <p>No upcoming events found.</p>
          </div>
        ) : (
          events.map(event => (
            <div key={event.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{event.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{event.description}</p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
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
          ))
        )}
      </div>
    </div>
  );
};

export default EventsTab;
