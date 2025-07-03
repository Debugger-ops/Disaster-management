"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, AlertTriangle, Users, Clock, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import './Map.css';

interface EmergencyReport {
  id: string;
  type: 'fire' | 'flood' | 'medical' | 'accident' | 'other';
  location: string;
  coordinates: { lat: number; lng: number };
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  description: string;
  status: 'active' | 'responding' | 'resolved';
  reportedBy: string;
}

const Map: React.FC = () => {
  const [reports, setReports] = useState<EmergencyReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<EmergencyReport | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterSeverity, setFilterSeverity] = useState<string>('all');

  useEffect(() => {
    // Mock data for demonstration
    const mockReports: EmergencyReport[] = [
      {
        id: '1',
        type: 'fire',
        location: 'Downtown Area, Main Street',
        coordinates: { lat: 40.7128, lng: -74.0060 },
        severity: 'high',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        description: 'Building fire reported in commercial district',
        status: 'responding',
        reportedBy: 'John Doe'
      },
      {
        id: '2',
        type: 'flood',
        location: 'Riverside Park',
        coordinates: { lat: 40.7589, lng: -73.9851 },
        severity: 'medium',
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        description: 'Flash flooding due to heavy rainfall',
        status: 'active',
        reportedBy: 'Jane Smith'
      },
      {
        id: '3',
        type: 'medical',
        location: 'City Hospital Parking',
        coordinates: { lat: 40.7505, lng: -73.9934 },
        severity: 'critical',
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        description: 'Multi-vehicle accident with injuries',
        status: 'responding',
        reportedBy: 'Emergency Services'
      }
    ];
    setReports(mockReports);
  }, []);

const filteredReports = reports.filter(report => {
  const typeMatch = filterType === 'all' || report.type === filterType;
  const severityMatch = filterSeverity === 'all' || report.severity === filterSeverity;
  return typeMatch && severityMatch;
});


  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return '#22c55e';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      case 'critical': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#ef4444';
      case 'responding': return '#f59e0b';
      case 'resolved': return '#22c55e';
      default: return '#6b7280';
    }
  };

  return (
    <div className="map-wrapper">
      <header className="map-header">
        <div className="header-container">
          <div className="logo-wrapper">
            <AlertTriangle className="logo-icon" />
            <span className="logo-text">DisasterAid</span>
          </div>
          <nav className="nav-links">
            <Button variant="outline" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild>
              <Link href="/report">Report Emergency</Link>
            </Button>
          </nav>
        </div>
      </header>

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
              {filteredReports.map(report => (
                <div 
                  key={report.id} 
                  className={`report-card ${selectedReport?.id === report.id ? 'selected' : ''}`}
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="report-header">
                    <div className="report-type">
                      <AlertTriangle className="report-icon" />
                      <span>{report.type.charAt(0).toUpperCase() + report.type.slice(1)}</span>
                    </div>
                    <div 
                      className="severity-badge"
                      style={{ backgroundColor: getSeverityColor(report.severity) }}
                    >
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
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(report.status) }}
                  >
                    {report.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="map-view">
            <div className="map-placeholder">
              <div className="map-content">
                <MapPin className="map-icon" />
                <h3>Interactive Map View</h3>
                <p>Emergency locations and real-time updates would be displayed here</p>
                {selectedReport && (
                  <div className="selected-report-details">
                    <h4>Selected Report Details</h4>
                    <p><strong>Type:</strong> {selectedReport.type}</p>
                    <p><strong>Location:</strong> {selectedReport.location}</p>
                    <p><strong>Severity:</strong> {selectedReport.severity}</p>
                    <p><strong>Status:</strong> {selectedReport.status}</p>
                    <p><strong>Description:</strong> {selectedReport.description}</p>
                    <p><strong>Reported by:</strong> {selectedReport.reportedBy}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;