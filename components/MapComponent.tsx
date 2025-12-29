import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as L from 'leaflet';
import { Maximize2, X, Navigation } from 'lucide-react';

interface MapComponentProps {
  lat: number;
  lng: number;
  locationName: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, locationName }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const fullscreenMapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const fullscreenMapInstanceRef = useRef<L.Map | null>(null);

  const createMap = (container: HTMLDivElement, mapRef: React.MutableRefObject<L.Map | null>) => {
    if (mapRef.current) {
      mapRef.current.remove();
    }

    const map = L.map(container).setView([lat, lng], 16);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    L.circleMarker([lat, lng], {
      radius: 14,
      fillColor: '#8b5cf6', // purple-500 to match theme
      color: '#fff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(map)
      .bindPopup(`<b>${locationName}</b>`)
      .openPopup();

    mapRef.current = map;
    return map;
  };

  // Initialize inline map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    createMap(mapContainerRef.current, mapInstanceRef);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, locationName]);

  // Initialize fullscreen map when opened
  useEffect(() => {
    if (isFullscreen && fullscreenMapRef.current) {
      // Small delay to ensure modal is rendered
      setTimeout(() => {
        if (fullscreenMapRef.current) {
          const map = createMap(fullscreenMapRef.current, fullscreenMapInstanceRef);
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
  }, [isFullscreen, lat, lng, locationName]);

  // Handle escape key to close fullscreen - use capture phase for reliability
  useEffect(() => {
    if (!isFullscreen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        setIsFullscreen(false);
      }
    };

    // Use capture phase to catch event before map can intercept it
    document.addEventListener('keydown', handleEscape, true);
    return () => document.removeEventListener('keydown', handleEscape, true);
  }, [isFullscreen]);

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  return (
    <>
      {/* Inline Map */}
      <div className="mt-3 w-full h-48 rounded-xl overflow-hidden shadow-lg border border-white/20 relative z-0 group">
        <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />

        {/* Expand Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-2 right-2 p-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-[1000]"
          title="View fullscreen"
        >
          <Maximize2 size={16} />
        </button>
      </div>

      {/* Fullscreen Modal - Using Portal to render at document body level */}
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
              <h2 className="text-white font-semibold text-lg">{locationName}</h2>
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

          {/* Fullscreen Map - absolute positioning to fill entire viewport */}
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
            Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">Esc</kbd> to close • Scroll to zoom
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default MapComponent;