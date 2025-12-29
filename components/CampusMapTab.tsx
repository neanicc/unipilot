import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as L from 'leaflet';
import { MapPin, Maximize2, X, Navigation } from 'lucide-react';
import { UniversityProfile } from '../types';

interface Props {
    university: UniversityProfile;
}

const CampusMapTab: React.FC<Props> = ({ university }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const fullscreenMapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const fullscreenMapInstanceRef = useRef<L.Map | null>(null);

    const [lat, lng] = university.campusCoordinates;

    const createMap = (container: HTMLDivElement, mapRef: React.MutableRefObject<L.Map | null>, zoom: number = 15) => {
        if (mapRef.current) {
            mapRef.current.remove();
        }

        const map = L.map(container).setView([lat, lng], zoom);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Add campus center marker
        L.circleMarker([lat, lng], {
            radius: 16,
            fillColor: '#8b5cf6',
            color: '#fff',
            weight: 3,
            opacity: 1,
            fillOpacity: 0.9
        }).addTo(map)
            .bindPopup(`<b>${university.campusName}</b><br/>${university.name}`)
            .openPopup();

        mapRef.current = map;
        return map;
    };

    // Initialize main map
    useEffect(() => {
        if (!mapContainerRef.current) return;

        // Small delay to ensure container is rendered
        const timer = setTimeout(() => {
            if (mapContainerRef.current) {
                createMap(mapContainerRef.current, mapInstanceRef, 15);
            }
        }, 100);

        return () => {
            clearTimeout(timer);
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [lat, lng, university]);

    // Initialize fullscreen map when opened
    useEffect(() => {
        if (isFullscreen && fullscreenMapRef.current) {
            setTimeout(() => {
                if (fullscreenMapRef.current) {
                    const map = createMap(fullscreenMapRef.current, fullscreenMapInstanceRef, 16);
                    map.invalidateSize();
                }
            }, 100);
        }

        return () => {
            if (fullscreenMapInstanceRef.current) {
                fullscreenMapInstanceRef.current.remove();
                fullscreenMapInstanceRef.current = null;
            }
        };
    }, [isFullscreen, lat, lng, university]);

    // Handle escape key
    useEffect(() => {
        if (!isFullscreen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                setIsFullscreen(false);
            }
        };

        document.addEventListener('keydown', handleEscape, true);
        return () => document.removeEventListener('keydown', handleEscape, true);
    }, [isFullscreen]);

    const openInGoogleMaps = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                    <MapPin className="text-purple-400" />
                    Campus Map
                </h2>
                <p className="text-sm mt-1 text-white/60">
                    Explore {university.name} - {university.campusName}
                </p>
            </div>

            {/* Campus Name Badge */}
            <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-white font-medium">{university.campusName}</span>
                </div>
                <button
                    onClick={openInGoogleMaps}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/20 text-white/80 hover:text-white transition-all text-sm"
                >
                    <Navigation size={14} />
                    Open in Google Maps
                </button>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-white/20 group">
                <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />

                {/* Expand Button */}
                <button
                    onClick={() => setIsFullscreen(true)}
                    className="absolute top-3 right-3 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-[1000]"
                    title="View fullscreen"
                >
                    <Maximize2 size={18} />
                </button>

                {/* Campus Label Overlay */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg z-[1000]">
                    <span className="text-white text-sm font-medium">{university.shortName} • {university.campusName}</span>
                </div>
            </div>

            {/* Help text */}
            <p className="mt-4 text-center text-white/40 text-xs">
                Scroll or pinch to zoom • Click and drag to pan • Click expand for fullscreen
            </p>

            {/* Fullscreen Modal */}
            {isFullscreen && ReactDOM.createPortal(
                <div
                    className="bg-black"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 99999,
                        overflow: 'hidden'
                    }}
                >
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-black/70 border-b border-white/10 z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                            <h2 className="text-white font-semibold text-lg">{university.name} - {university.campusName}</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={openInGoogleMaps}
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-sm"
                            >
                                <Navigation size={16} />
                                Open in Google Maps
                            </button>
                            <button
                                onClick={() => setIsFullscreen(false)}
                                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                                title="Close (Esc)"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Fullscreen Map */}
                    <div
                        ref={fullscreenMapRef}
                        style={{
                            position: 'absolute',
                            top: '64px',
                            left: 0,
                            right: 0,
                            bottom: '48px',
                            width: '100%'
                        }}
                    />

                    {/* Footer hint */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70 border-t border-white/10 text-center text-white/40 text-xs z-10">
                        Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">Esc</kbd> to close • Scroll to zoom • Drag to pan
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default CampusMapTab;
