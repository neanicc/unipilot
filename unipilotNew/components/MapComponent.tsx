import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';

interface MapComponentProps {
  lat: number;
  lng: number;
  locationName: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, locationName }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map if not already initialized
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapContainerRef.current).setView([lat, lng], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
    } else {
        // Just update view if already exists
        mapInstanceRef.current.setView([lat, lng], 16);
    }

    // Remove existing layers to clear old markers (if reusing instance logic, though here we unmount often)
    mapInstanceRef.current.eachLayer((layer) => {
        if (layer instanceof L.CircleMarker || layer instanceof L.Marker) {
            mapInstanceRef.current?.removeLayer(layer);
        }
    });

    // Add a circle marker (avoiding icon asset issues with CDNs)
    L.circleMarker([lat, lng], {
        radius: 12,
        fillColor: '#3b82f6', // blue-500
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(mapInstanceRef.current)
      .bindPopup(`<b>${locationName}</b>`)
      .openPopup();

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, locationName]);

  return (
    <div className="mt-3 w-full h-48 rounded-xl overflow-hidden shadow-md border border-gray-200 relative z-0">
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MapComponent;