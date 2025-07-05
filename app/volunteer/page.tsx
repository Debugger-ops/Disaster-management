'use client';
import React, { useState } from 'react';
import {
  Users,
  Heart,
  MapPin,
  Clock,
  Phone,
  Mail,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import './Volunteer.css';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert('Thank you for volunteering! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          skills: '',
          availability: '',
          experience: '',
        });
      } else {
        alert('Submission failed: ' + data.error);
      }
    } catch (error) {
      alert('Error submitting form: ' + (error as Error).message);
    }
  };

  return (
    <div className="volunteer-wrapper">
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
                <h3>What We&apos;re Looking For</h3>
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
                  <label htmlFor="skills">Skills &amp; Expertise</label>
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
