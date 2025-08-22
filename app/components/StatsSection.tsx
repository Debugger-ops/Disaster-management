import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { TrendingUp, Users, MapPin, Clock } from 'lucide-react';
import './StatsSection.css';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: MapPin,
      value: '1,247',
      label: 'Reports Submitted',
      description: 'Community members helping each other',
      colorClass: 'red'
    },
    {
      icon: Users,
      value: '892',
      label: 'Active Volunteers',
      description: 'Ready to respond when needed',
      colorClass: 'blue'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Response Rate',
      description: 'Successful emergency coordination',
      colorClass: 'green'
    },
    {
      icon: Clock,
      value: '12min',
      label: 'Average Response',
      description: 'Time to first volunteer contact',
      colorClass: 'orange'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">Impact by the Numbers</h2>
          <p className="stats-subtitle">
            See how our community is making a difference in disaster relief and emergency response
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="stat-card">
                <CardContent className="stat-content">
                  <div className={`stat-icon-wrapper ${stat.colorClass}`}>
                    <Icon className="stat-icon" />
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="system-status">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span className="status-text">
              System operational - All services running normally
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
