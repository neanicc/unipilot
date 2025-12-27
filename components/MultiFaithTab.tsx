
import React from 'react';
import { MultiFaithSpace, UniversityProfile } from '../types';
import { Heart, MapPin, Clock, CheckCircle } from 'lucide-react';
import GlareHover from './GlareHover';

interface Props {
  spaces: MultiFaithSpace[];
  university: UniversityProfile;
}

const MultiFaithTab: React.FC<Props> = ({ spaces, university }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">

      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Heart className="text-purple-400" fill="currentColor" />
          Multi-Faith Spaces
        </h2>
        <p className="text-white/60 text-sm mt-1">Quiet places for prayer, meditation, and reflection at {university.shortName}.</p>
      </div>

      {/* Spaces List */}
      <div className="space-y-4">
        {spaces.length === 0 ? (
          <div className="text-center py-10 text-white/40 bg-black/50 rounded-md border border-white/20 border-dashed">
            <p>No multi-faith spaces listed for this campus yet.</p>
          </div>
        ) : (
          spaces.map(space => (
            <GlareHover
              key={space.id}
              background="rgba(0, 0, 0, 0.6)"
              borderRadius="8px"
              borderColor="rgba(255, 255, 255, 0.2)"
              glareColor="#ffffff"
              glareOpacity={0.2}
            >
              <div className="w-full p-5 text-left">

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{space.name}</h3>
                </div>

                <p className="text-sm text-white/70 mb-4 leading-relaxed">{space.description}</p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-4">
                  <div className="flex items-start gap-2 text-sm text-white/70">
                    <MapPin size={16} className="mt-0.5 text-purple-400" />
                    <div>
                      <span className="font-semibold block text-xs uppercase text-white/50 tracking-wide">Location</span>
                      <span>{space.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-white/70">
                    <Clock size={16} className="mt-0.5 text-purple-400" />
                    <div>
                      <span className="font-semibold block text-xs uppercase text-white/50 tracking-wide">Hours</span>
                      <span>{space.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities Tags */}
                {space.amenities && space.amenities.length > 0 && (
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-xs font-semibold text-white/50 uppercase mb-2">Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {space.amenities.map((amenity, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 text-xs text-white/80 border border-white/20">
                          <CheckCircle size={10} className="text-green-400" />
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </GlareHover>
          ))
        )}
      </div>
    </div>
  );
};

export default MultiFaithTab;
