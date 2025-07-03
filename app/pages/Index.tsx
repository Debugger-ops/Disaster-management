import React from 'react';
import { Button } from '../components/ui/button';
import { AlertTriangle, Users } from 'lucide-react';
import Link from 'next/link';

import HeroSection from '../components/HeroSection';
import QuickActions from '../components/QuickActions';
import StatsSection from '../components/StatsSection';
import './Index.css';

const Index: React.FC = () => {
  return (
    <div className="home-wrapper">
      {/* Header */}
      <header className="home-header">
        <div className="header-container">
          <div className="logo-wrapper">
            <AlertTriangle className="logo-icon" />
            <span className="logo-text">DisasterAid</span>
          </div>
          <nav className="nav-links">
            <Button variant="outline" asChild>
              <Link href="/map">Live Map</Link>
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

      {/* Main Sections */}
      <main>
        <HeroSection />
        <QuickActions />
        <StatsSection />

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">
              Every Second Counts in an Emergency
            </h2>
            <p className="cta-description">
              Join our community of first responders and volunteers. Together, we can make a difference when it matters most.
            </p>
            <div className="cta-buttons">
              <Button size="lg" className="cta-report" asChild>
                <Link href="/report">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Report Emergency
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/volunteer">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Volunteer
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          &copy; 2024 DisasterAid Platform. Built for communities, by communities.
        </div>
      </footer>
    </div>
  );
};

export default Index;
