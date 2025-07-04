'use client';
import React, { useState, useEffect } from 'react';
import {
  Users,
  Heart,
  MapPin,
  Clock,
  Phone,
  Mail,
  User,
  AlertTriangle,
  Zap,
  X,
  Menu,
  Activity,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import './Volunteer.css';

// NavLink helper component
const NavLink = ({ href, children, variant = 'default' }: any) => (
  <Link
    href={href}
    className={`nav-link ${variant === 'primary' ? 'nav-link-primary' : ''}`}
  >
    {children}
  </Link>
);

const Volunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    availability: '',
    experience: '',
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer registration:', formData);
    alert('Thank you for volunteering! We will contact you soon.');
  };

  return (
    <div className="volunteer-wrapper">
      {/* Header */}
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-red-100/50'
          : 'bg-gradient-to-r from-white/95 via-white/90 to-red-50/90 backdrop-blur-sm'
        }
      `}>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-3 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <AlertTriangle className="h-7 w-7 text-white animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black bg-gradient-to-r from-red-600 via-red-700 to-orange-600 bg-clip-text text-transparent tracking-tight">
                  DisasterAid
                </span>
                <span className="text-xs text-gray-600 font-medium tracking-wide">
                  Emergency Response Network
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-3">
              <NavLink href="/map"><MapPin className="mr-2 h-4 w-4" />Live Crisis Map</NavLink>
              <NavLink href="/dashboard"><Activity className="mr-2 h-4 w-4" />Control Center</NavLink>
              <NavLink href="/resources"><Shield className="mr-2 h-4 w-4" />Resources</NavLink>
              <NavLink href="/report" variant="primary"><Zap className="mr-2 h-4 w-4" />Report Emergency</NavLink>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/80 border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-200 transform hover:scale-105"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-red-100 shadow-xl">
              <div className="px-4 py-6 space-y-4">
                <NavLink href="/map"><MapPin className="mr-3 h-5 w-5" />Live Crisis Map</NavLink>
                <NavLink href="/dashboard"><Activity className="mr-3 h-5 w-5" />Control Center</NavLink>
                <NavLink href="/resources"><Shield className="mr-3 h-5 w-5" />Resources</NavLink>
                <NavLink href="/report" variant="primary"><Zap className="mr-3 h-5 w-5" />Report Emergency</NavLink>
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-300/50 to-transparent"></div>
      </header>

      {/* Hero Section */}
      <section className="volunteer-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <Users className="title-icon" />
              Become a Volunteer
            </h1>
            <p className="hero-description">
              Join our network of dedicated volunteers and help make a difference in your community during emergencies and disasters.
            </p>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <Heart className="stat-icon" />
              <span className="stat-number">500+</span>
              <span className="stat-label">Active Volunteers</span>
            </div>
            <div className="stat-item">
              <MapPin className="stat-icon" />
              <span className="stat-number">25</span>
              <span className="stat-label">Cities Covered</span>
            </div>
            <div className="stat-item">
              <Clock className="stat-icon" />
              <span className="stat-number">24/7</span>
              <span className="stat-label">Response Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="volunteer-main">
        <div className="content-container">
          <div className="content-grid">
            {/* Info Section */}
            <div className="info-section">
              <h2 className="section-title">Why Volunteer?</h2>
              <div className="info-cards">
                <div className="info-card">
                  <Heart className="card-icon" />
                  <h3>Make a Difference</h3>
                  <p>Your skills and time can save lives and help communities recover faster from disasters.</p>
                </div>
                <div className="info-card">
                  <Users className="card-icon" />
                  <h3>Join a Community</h3>
                  <p>Connect with like-minded individuals who are passionate about helping others.</p>
                </div>
                <div className="info-card">
                  <Clock className="card-icon" />
                  <h3>Flexible Schedule</h3>
                  <p>Choose when and how you want to contribute based on your availability.</p>
                </div>
              </div>

              <div className="requirements">
                <h3>What We're Looking For</h3>
                <ul>
                  <li>Compassionate individuals ready to help in emergencies</li>
                  <li>Basic first aid knowledge (training provided if needed)</li>
                  <li>Ability to work in stressful situations</li>
                  <li>Good communication skills</li>
                  <li>Willingness to undergo background check</li>
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div className="form-section">
              <h2 className="section-title">Register as a Volunteer</h2>
              <form onSubmit={handleSubmit} className="volunteer-form">
                <div className="form-group">
                  <label htmlFor="name"><User className="label-icon" />Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><Mail className="label-icon" />Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"><Phone className="label-icon" />Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="location"><MapPin className="label-icon" />Location (City, State)</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Skills & Expertise</label>
                  <textarea id="skills" name="skills" value={formData.skills} onChange={handleInputChange} rows={3} className="form-textarea" placeholder="e.g., First Aid, Medical Training, Construction, IT Support..." />
                </div>
                <div className="form-group">
                  <label htmlFor="availability"><Clock className="label-icon" />Availability</label>
                  <select id="availability" name="availability" value={formData.availability} onChange={handleInputChange} required className="form-select">
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="evenings">Evenings</option>
                    <option value="emergency-only">Emergency Response Only</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Previous Experience</label>
                  <textarea id="experience" name="experience" value={formData.experience} onChange={handleInputChange} rows={3} className="form-textarea" placeholder="Tell us about any relevant volunteer or emergency response experience..." />
                </div>
                <Button type="submit" size="lg" className="submit-button">
                  <Heart className="mr-2 h-5 w-5" />
                  Register as Volunteer
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="volunteer-footer">
        <div className="footer-content">
          <p>&copy; 2024 DisasterAid Platform. Built for communities, by communities.</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/report">Report Emergency</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Volunteer;
