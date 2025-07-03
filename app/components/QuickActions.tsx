import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { AlertTriangle, Users, MapPin, Bell } from 'lucide-react';
import Link from 'next/link';
import './QuickActions.css';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: AlertTriangle,
      title: 'Report Emergency',
      description: 'Quickly report disasters, accidents, or situations requiring immediate assistance',
      href: '/report',
      colorClass: 'red'
    },
    {
      icon: Users,
      title: 'Volunteer Response',
      description: 'Join the volunteer network and help coordinate relief efforts in your area',
      href: '/volunteer',
      colorClass: 'blue'
    },
    {
      icon: MapPin,
      title: 'View Live Map',
      description: 'See real-time disaster reports and volunteer activities on the interactive map',
      href: '/map',
      colorClass: 'green'
    },
    {
      icon: Bell,
      title: 'Emergency Alerts',
      description: 'Set up notifications for emergencies and volunteer opportunities near you',
      href: '/alerts',
      colorClass: 'orange'
    }
  ];

  return (
    <section className="quick-actions">
      <div className="quick-actions-container">
        <div className="quick-actions-header">
          <h2 className="quick-actions-title">Take Action Now</h2>
          <p className="quick-actions-subtitle">
            Whether you need help or want to provide it, get started with these quick actions
          </p>
        </div>

        <div className="quick-actions-grid">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="quick-card">
                <CardHeader className="quick-card-header">
                  <div className={`quick-icon ${action.colorClass}`}>
                    <Icon className="icon-white" />
                  </div>
                  <CardTitle className="quick-card-title">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="quick-card-content">
                  <CardDescription className="quick-card-description">
                    {action.description}
                  </CardDescription>
                  <Button className={`quick-card-button ${action.colorClass}`} asChild>
                    <Link href={action.href}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
