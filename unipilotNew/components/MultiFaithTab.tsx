
import React from 'react';
import { MultiFaithSpace, UniversityProfile } from '../types';
import { Heart, MapPin, Clock, CheckCircle } from 'lucide-react';

interface Props {
  spaces: MultiFaithSpace[];
  university: UniversityProfile;
}

const MultiFaithTab: React.FC<Props> = ({ spaces, university }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Heart className={`text-${university.themeColor}`} fill="currentColor" />
          Multi-Faith Spaces
        </h2>
        <p className="text-gray-500 text-sm mt-1">Quiet places for prayer, meditation, and reflection at {university.shortName}.</p>
      </div>

      {/* Spaces List */}
      <div className="space-y-4">
        {spaces.length === 0 ? (
             <div className="text-center py-10 text-gray-400 bg-white rounded-xl border border-gray-100 border-dashed">
                <p>No multi-faith spaces listed for this campus yet.</p>
             </div>
        ) : (
            spaces.map(space => (
            <div key={space.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{space.name}</h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{space.description}</p>
                
                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin size={16} className={`mt-0.5 text-${university.themeColor}`} />
                        <div>
                            <span className="font-semibold block text-xs uppercase text-gray-400 tracking-wide">Location</span>
                            <span>{space.location}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Clock size={16} className={`mt-0.5 text-${university.themeColor}`} />
                        <div>
                            <span className="font-semibold block text-xs uppercase text-gray-400 tracking-wide">Hours</span>
                            <span>{space.hours}</span>
                        </div>
                    </div>
                </div>

                {/* Amenities Tags */}
                {space.amenities && space.amenities.length > 0 && (
                    <div className="border-t border-gray-50 pt-3">
                        <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Amenities</p>
                        <div className="flex flex-wrap gap-2">
                            {space.amenities.map((amenity, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-50 text-xs text-gray-600 border border-gray-100">
                                    <CheckCircle size={10} className="text-green-500" />
                                    {amenity}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            ))
        )}
      </div>
    </div>
  );
};

export default MultiFaithTab;
