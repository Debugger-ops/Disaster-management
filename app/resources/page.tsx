'use client';
import { useEffect } from 'react';
import './resources.css';

const DisasterResources = () => {
  useEffect(() => {
    // Download button click
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This would download: ' + btn.textContent);
      })
    );

    // Card hover animation
    

    // Emergency contact hover pulse
    const contacts = document.querySelectorAll('.emergency-contact');
    (contacts as NodeListOf<HTMLElement>).forEach((contact) => {
      contact.addEventListener('mouseenter', () => {
        contact.style.animation = 'pulse 0.6s ease-in-out';
      });
      contact.addEventListener('mouseleave', () => {
        contact.style.animation = 'none';
      });
    });

    // Weather simulation
    const updateWeather = () => {
      const weatherWidget = document.querySelector('.weather-widget p');
      const temps = [68, 70, 72, 74, 76];
      const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Clear'];
      const temp = temps[Math.floor(Math.random() * temps.length)];
      const condition = conditions[Math.floor(Math.random() * conditions.length)];

      if (weatherWidget) {
        weatherWidget.textContent = `${condition} • ${temp}°F`;
      }
    };

    const interval = setInterval(updateWeather, 30000);
    updateWeather();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>🚨 Disaster Management Resources</h1>
        <p className="subtitle">
          Essential information and tools for emergency preparedness and response
        </p>
      </header>

      <section className="alert-section">
        <div className="alert-title">⚠️ Current Alert Status</div>
        <p>No active weather alerts in your area. Stay informed and prepared.</p>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-number">72</span>
            <span className="info-label">Hours of supplies recommended</span>
          </div>
          <div className="info-item">
            <span className="info-number">3</span>
            <span className="info-label">Emergency contact methods</span>
          </div>
          <div className="info-item">
            <span className="info-number">24/7</span>
            <span className="info-label">Emergency services available</span>
          </div>
        </div>
      </section>

      <div className="resource-grid">
        <div className="resource-card">
          <div className="card-header">
            <div className="card-icon">📞</div>
            <div className="card-title">Emergency Contacts</div>
          </div>
          <div className="emergency-contact">
            <div className="contact-info">Emergency Services</div>
            <div className="contact-number">100</div>
          </div>
          <div className="emergency-contact">
            <div className="contact-info">Disaster Hotline</div>
            <div className="contact-number">1-800-HELP-NOW</div>
          </div>
          <div className="emergency-contact">
            <div className="contact-info">Red Cross Emergency</div>
            <div className="contact-number">1-800-RED-CROSS</div>
          </div>
        </div>

        <div className="resource-card ">
          <div className="card-header ">
            <div className="card-icon">🎒</div>
            <div className="card-title">Emergency Kit Checklist</div>
          </div>
          <div className="checklist-item">
            <div className="checklist-icon">✓</div>
            <div>Water (1 gallon per person per day for 3 days)</div>
          </div>
          <div className="checklist-item">
            <div className="checklist-icon">✓</div>
            <div>Non-perishable food (3-day supply)</div>
          </div>
          <div className="checklist-item">
            <div className="checklist-icon">✓</div>
            <div>Flashlight and extra batteries</div>
          </div>
        </div>

        <div className="resource-card">
          <div className="card-header">
            <div className="card-icon">🌦️</div>
            <div className="card-title">Weather Monitoring</div>
          </div>
          <div className="weather-widget">
            <h3>Current Weather Status</h3>
            <p>Partly Cloudy • 30°C</p>
            <p>No severe weather warnings</p>
          </div>
          <a href="#" className="download-btn">🌡️ Weather App Download</a>
          <a href="#" className="download-btn">📱 Emergency Alert Setup</a>
        </div>
      </div>
    </div>
  );
};

export default DisasterResources;
