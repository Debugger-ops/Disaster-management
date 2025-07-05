"use client";
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { 
  AlertTriangle, 
  MapPin, 
  Phone, 
  Clock, 
  User, 
  FileText, 
  Camera, 
  Send,
  Zap,
  Shield,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import './ReportEmergency.css';

const ReportEmergency: React.FC = () => {
  const [formData, setFormData] = useState({
    emergencyType: '',
    location: '',
    description: '',
    severity: '',
    contactName: '',
    contactPhone: '',
    injuries: '',
    additionalInfo: ''
  });

  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationStr = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setCurrentLocation(locationStr);
          setFormData(prev => ({
            ...prev,
            location: locationStr
          }));
          setIsGettingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsGettingLocation(false);
          alert('Unable to get your location. Please enter it manually.');
        }
      );
    } else {
      setIsGettingLocation(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Emergency report:', formData);
    // Handle form submission here
    alert('Emergency report submitted! Emergency services have been notified.');
  };

  const emergencyTypes = [
    { value: 'fire', label: 'Fire Emergency', icon: '🔥' },
    { value: 'medical', label: 'Medical Emergency', icon: '🚑' },
    { value: 'accident', label: 'Traffic Accident', icon: '🚗' },
    { value: 'natural', label: 'Natural Disaster', icon: '🌪️' },
    { value: 'crime', label: 'Criminal Activity', icon: '🚨' },
    { value: 'utility', label: 'Utility Emergency', icon: '⚡' },
    { value: 'other', label: 'Other Emergency', icon: '⚠️' }
  ];

  return (
    <div className="report-wrapper">
      

      {/* Emergency Alert Banner */}
      <div className="emergency-banner">
        <div className="banner-content">
          <AlertTriangle className="banner-icon" />
          <div className="banner-text">
            <h2>Emergency Reporting System</h2>
            <p>For life-threatening emergencies, call 1078 immediately</p>
          </div>
          <div className="emergency-numbers">
            <div className="emergency-number">
              <Phone className="phone-icon" />
              <span>1078</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="report-main">
        <div className="content-container">
          <div className="content-grid">
            {/* Quick Actions */}
            <div className="quick-actions">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <Button className="action-btn emergency-btn" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1078
                </Button>
                <Button className="action-btn medical-btn" variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Medical Emergency
                </Button>
                <Button className="action-btn fire-btn" variant="outline" size="lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Fire Emergency
                </Button>
                <Button className="action-btn police-btn" variant="outline" size="lg">
                  <Shield className="mr-2 h-5 w-5" />
                  Police
                </Button>
              </div>
              
              <div className="safety-tips">
                <h4>Safety Tips</h4>
                <ul>
                  <li>Stay calm and assess the situation</li>
                  <li>Ensure your own safety first</li>
                  <li>Provide accurate location information</li>
                  <li>Follow dispatcher instructions</li>
                  <li>Don't hang up until told to do so</li>
                </ul>
              </div>
            </div>

            {/* Report Form */}
            <div className="form-section">
              <h2 className="section-title">Report Non-Emergency Incident</h2>
              <p className="form-description">
                Use this form to report non-life-threatening emergencies that require attention from local authorities or emergency services.
              </p>
              
              <form onSubmit={handleSubmit} className="report-form">
                <div className="form-group">
                  <label htmlFor="emergencyType">
                    <AlertTriangle className="label-icon" />
                    Emergency Type
                  </label>
                  <select
                    id="emergencyType"
                    name="emergencyType"
                    value={formData.emergencyType}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select emergency type</option>
                    {emergencyTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.icon} {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="severity">
                    <Clock className="label-icon" />
                    Severity Level
                  </label>
                  <select
                    id="severity"
                    name="severity"
                    value={formData.severity}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select severity</option>
                    <option value="low">Low - Can wait several hours</option>
                    <option value="medium">Medium - Needs attention within 1 hour</option>
                    <option value="high">High - Urgent, needs immediate attention</option>
                  </select>
                </div>

                <div className="form-group location-group">
                  <label htmlFor="location">
                    <MapPin className="label-icon" />
                    Location
                  </label>
                  <div className="location-input-group">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter address or coordinates"
                      required
                      className="form-input"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={getCurrentLocation}
                      disabled={isGettingLocation}
                      className="location-btn"
                    >
                      {isGettingLocation ? (
                        <Clock className="h-4 w-4 animate-spin" />
                      ) : (
                        <MapPin className="h-4 w-4" />
                      )}
                      {isGettingLocation ? 'Getting...' : 'Use Current'}
                    </Button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    <FileText className="label-icon" />
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe the emergency situation in detail..."
                    required
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="injuries">
                    Are there any injuries?
                  </label>
                  <select
                    id="injuries"
                    name="injuries"
                    value={formData.injuries}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select option</option>
                    <option value="none">No injuries</option>
                    <option value="minor">Minor injuries</option>
                    <option value="serious">Serious injuries</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contactName">
                    <User className="label-icon" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactPhone">
                    <Phone className="label-icon" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="additionalInfo">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any additional details that might be helpful..."
                    className="form-textarea"
                  />
                </div>

                <div className="form-actions">
                  <Button type="submit" size="lg" className="submit-button">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Emergency Report
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="cancel-button">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="report-footer">
        <div className="footer-content">
          <p>&copy; 2024 DisasterAid Platform. Built for communities, by communities.</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/volunteer">Volunteer</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReportEmergency;
