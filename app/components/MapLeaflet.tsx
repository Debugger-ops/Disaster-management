'use client';
import React, { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface EmergencyReport {
  id: string;
  type: string;
  location: string;
  coordinates: { lat: number; lng: number };
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  status: string;
  reportedBy: string;
}

interface MapLeafletProps {
  reports: EmergencyReport[];
  selectedReport: EmergencyReport | null;
  setSelectedReport: (report: EmergencyReport) => void;
}

// Use a custom icon or fallback to Leaflet default icon
const customIcon = new L.Icon({
  iconUrl: '/icons/alert-icon.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const MapCenterer = ({ coordinates }: { coordinates: { lat: number; lng: number } }) => {
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.setView([coordinates.lat, coordinates.lng], 13);
    }
  }, [coordinates, map]);
  return null;
};

const MapLeaflet: React.FC<MapLeafletProps> = ({ reports, selectedReport, setSelectedReport }) => {
  return (
    <MapContainer
      center={[28.6139, 77.209]} // Delhi default
      zoom={11}
      scrollWheelZoom={true}
      className="w-full h-full rounded-lg z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />

      {reports.map((report) => (
        <Marker
          key={report.id}
          position={[report.coordinates.lat, report.coordinates.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => setSelectedReport(report),
          }}
        >
          <Popup>
            <strong>{report.type}</strong><br />
            {report.location}<br />
            <em>Reported by: {report.reportedBy}</em>
          </Popup>
        </Marker>
      ))}

      {selectedReport && (
        <MapCenterer coordinates={selectedReport.coordinates} />
      )}
    </MapContainer>
  );
};

export default MapLeaflet;
