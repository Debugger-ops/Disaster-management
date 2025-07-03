import React from 'react';
import { Button } from '../components/ui/button';
import { MapPin, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-heading">
              <h1 className="hero-title">
                Community-Powered
                <span className="highlight">Disaster Relief</span>
              </h1>
              <p className="hero-subtitle">
                Connect those who need help with those who can provide it. Real-time disaster reporting and volunteer coordination when every second counts.
              </p>
            </div>

            <div className="hero-buttons">
              <Button size="lg" className="btn-primary" asChild>
                <Link href="/map">
                  <MapPin className="icon-left" />
                  View Live Map
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/report">Report Emergency</Link>
              </Button>
            </div>

            <div className="hero-features">
              <div className="feature-card">
                <div className="feature-icon bg-blue">
                  <Clock className="feature-icon-svg text-blue" />
                </div>
                <p className="feature-title">Real-time</p>
                <p className="feature-desc">Instant updates</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon bg-red">
                  <MapPin className="feature-icon-svg text-red" />
                </div>
                <p className="feature-title">Location-based</p>
                <p className="feature-desc">Precise mapping</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon bg-green">
                  <Shield className="feature-icon-svg text-green" />
                </div>
                <p className="feature-title">Community</p>
                <p className="feature-desc">Volunteer network</p>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stats-card">
              <div className="stats-icon">
                <MapPin className="stats-icon-main" />
              </div>
              <div className="stats-list">
                <div className="stats-item red">
                  <span>Active Emergencies</span>
                  <span className="badge red">12</span>
                </div>
                <div className="stats-item blue">
                  <span>Volunteers Available</span>
                  <span className="badge blue">47</span>
                </div>
                <div className="stats-item green">
                  <span>Requests Resolved</span>
                  <span className="badge green">238</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
