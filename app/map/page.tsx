// app/map/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AlertTriangle, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import "leaflet/dist/leaflet.css";
import "./Map.css";

interface MapLeafletProps {
  reports: EmergencyReport[];
  selectedReport: EmergencyReport | null;
  setSelectedReport: (report: EmergencyReport) => void;
}

const MapLeaflet = dynamic(() => import("../components/MapLeaflet"), {
  ssr: false,
}) as unknown as React.FC<MapLeafletProps>;


interface EmergencyReport {
  id: string;
  type: "fire" | "flood" | "medical" | "accident" | "other";
  location: string;
  coordinates: { lat: number; lng: number };
  severity: "low" | "medium" | "high" | "critical";
  timestamp: Date;
  description: string;
  status: "active" | "responding" | "resolved";
  reportedBy: string;
}

const MapPage: React.FC = () => {
  const [reports, setReports] = useState<EmergencyReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<EmergencyReport | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [filterSeverity, setFilterSeverity] = useState<string>("all");

  useEffect(() => {
    const mockReports: EmergencyReport[] = [
      {
        id: "1",
        type: "fire",
        location: "Downtown Area, Main Street",
        coordinates: { lat: 28.6139, lng: 77.209 },
        severity: "high",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        description: "Building fire reported in commercial district",
        status: "responding",
        reportedBy: "John Doe"
      },
      {
        id: "2",
        type: "flood",
        location: "Riverside Park",
        coordinates: { lat: 28.6271, lng: 77.217 },
        severity: "medium",
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        description: "Flash flooding due to heavy rainfall",
        status: "active",
        reportedBy: "Jane Smith"
      },
      {
        id: "3",
        type: "medical",
        location: "City Hospital Parking",
        coordinates: { lat: 28.6206, lng: 77.221 },
        severity: "critical",
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        description: "Multi-vehicle accident with injuries",
        status: "responding",
        reportedBy: "Emergency Services"
      }
    ];
    setReports(mockReports);
  }, []);

  const filteredReports = reports.filter((report) => {
    const typeMatch = filterType === "all" || report.type === filterType;
    const severityMatch = filterSeverity === "all" || report.severity === filterSeverity;
    return typeMatch && severityMatch;
  });

  return (
    <div className="map-wrapper">
      

      <main className="map-main">
        <div className="map-container">
          <div className="map-sidebar">
            <div className="sidebar-header">
              <h2>Live Emergency Reports</h2>
              <div className="filter-controls">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Types</option>
                  <option value="fire">Fire</option>
                  <option value="flood">Flood</option>
                  <option value="medical">Medical</option>
                  <option value="accident">Accident</option>
                  <option value="other">Other</option>
                </select>
                <select
                  value={filterSeverity}
                  onChange={(e) => setFilterSeverity(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Severity</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="reports-list">
              {filteredReports.map((report) => (
                <div
                  key={report.id}
                  className={`report-card ${selectedReport?.id === report.id ? "selected" : ""}`}
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="report-header">
                    <div className="report-type">
                      <AlertTriangle className="report-icon" />
                      <span>{report.type.charAt(0).toUpperCase() + report.type.slice(1)}</span>
                    </div>
                    <div className="severity-badge">
                      {report.severity}
                    </div>
                  </div>
                  <div className="report-location">
                    <MapPin className="location-icon" />
                    <span>{report.location}</span>
                  </div>
                  <div className="report-time">
                    <Clock className="time-icon" />
                    <span>{Math.floor((Date.now() - report.timestamp.getTime()) / 60000)} min ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="map-view">
            <MapLeaflet
              reports={filteredReports}
              selectedReport={selectedReport}
              setSelectedReport={setSelectedReport}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapPage;
