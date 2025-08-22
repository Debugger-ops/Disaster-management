"use client";
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Users, MapPin, Clock, TrendingUp, Activity, Phone} from 'lucide-react';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import './Dashboard.css';

interface DashboardStats {
  activeEmergencies: number;
  totalReports: number;
  respondersActive: number;
  avgResponseTime: number;
  reportsToday: number;
  volunteersOnline: number;
}

interface RecentActivity {
  id: string;
  type: 'report' | 'response' | 'volunteer';
  message: string;
  timestamp: Date;
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    activeEmergencies: 0,
    totalReports: 0,
    respondersActive: 0,
    avgResponseTime: 0,
    reportsToday: 0,
    volunteersOnline: 0
  });
  
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');

  useEffect(() => {
    // Mock data for demonstration
    const mockStats: DashboardStats = {
      activeEmergencies: 7,
      totalReports: 156,
      respondersActive: 23,
      avgResponseTime: 4.2,
      reportsToday: 12,
      volunteersOnline: 45
    };
    
    const mockActivity: RecentActivity[] = [
      {
        id: '1',
        type: 'report',
        message: 'New fire emergency reported at Downtown Plaza',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        severity: 'high'
      },
      {
        id: '2',
        type: 'response',
        message: 'Emergency response team dispatched to Riverside Park',
        timestamp: new Date(Date.now() - 12 * 60 * 1000),
        severity: 'medium'
      },
      {
        id: '3',
        type: 'volunteer',
        message: 'New volunteer registered: Sarah Johnson',
        timestamp: new Date(Date.now() - 18 * 60 * 1000)
      },
      {
        id: '4',
        type: 'report',
        message: 'Medical emergency resolved at City Hospital',
        timestamp: new Date(Date.now() - 25 * 60 * 1000),
        severity: 'critical'
      },
      {
        id: '5',
        type: 'response',
        message: 'Flood response team deployed to East District',
        timestamp: new Date(Date.now() - 35 * 60 * 1000),
        severity: 'high'
      }
    ];
    
    setStats(mockStats);
    setRecentActivity(mockActivity);
  }, []);

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case 'low': return '#22c55e';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      case 'critical': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'report': return <AlertTriangle className="activity-icon" />;
      case 'response': return <Activity className="activity-icon" />;
      case 'volunteer': return <Users className="activity-icon" />;
      default: return <Activity className="activity-icon" />;
    }
  };

  return (
    <div className="dashboard-wrapper">
      

      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-header-section">
            <h1 className="dashboard-title">Emergency Response Dashboard</h1>
            <div className="time-range-selector">
              <select 
                value={selectedTimeRange} 
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="time-select"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card critical">
              <div className="stat-icon">
                <AlertTriangle />
              </div>
              <div className="stat-content">
                <h3>Active Emergencies</h3>
                <p className="stat-number">{stats.activeEmergencies}</p>
                <span className="stat-label">Requiring immediate attention</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Activity />
              </div>
              <div className="stat-content">
                <h3>Total Reports</h3>
                <p className="stat-number">{stats.totalReports}</p>
                <span className="stat-label">+{stats.reportsToday} today</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users />
              </div>
              <div className="stat-content">
                <h3>Active Responders</h3>
                <p className="stat-number">{stats.respondersActive}</p>
                <span className="stat-label">Currently responding</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Clock />
              </div>
              <div className="stat-content">
                <h3>Avg Response Time</h3>
                <p className="stat-number">{stats.avgResponseTime}min</p>
                <span className="stat-label">Last 24 hours</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp />
              </div>
              <div className="stat-content">
                <h3>Reports Today</h3>
                <p className="stat-number">{stats.reportsToday}</p>
                <span className="stat-label">+15% from yesterday</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users />
              </div>
              <div className="stat-content">
                <h3>Volunteers Online</h3>
                <p className="stat-number">{stats.volunteersOnline}</p>
                <span className="stat-label">Available to help</span>
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <div className="activity-section">
              <h2>Recent Activity</h2>
              <div className="activity-feed">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon-wrapper">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="activity-content">
                      <p className="activity-message">{activity.message}</p>
                      <div className="activity-meta">
                        <span className="activity-time">
                          {Math.floor((Date.now() - activity.timestamp.getTime()) / 60000)} min ago
                        </span>
                        {activity.severity && (
                          <span 
                            className="activity-severity"
                            style={{ backgroundColor: getSeverityColor(activity.severity) }}
                          >
                            {activity.severity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quick-actions-section">
              <h2>Quick Actions</h2>
              <div className="action-cards">
                <div className="action-card">
                  <AlertTriangle className="action-icon emergency" />
                  <h3>Report Emergency</h3>
                  <p>Submit a new emergency report</p>
                  <Button className="action-button" asChild>
                    <Link href="/report">Report Now</Link>
                  </Button>
                </div>

                <div className="action-card">
                  <MapPin className="action-icon map" />
                  <h3>View Live Map</h3>
                  <p>See real-time emergency locations</p>
                  <Button variant="outline" className="action-button" asChild>
                    <Link href="/map">Open Map</Link>
                  </Button>
                </div>

                <div className="action-card">
                  <Users className="action-icon volunteer" />
                  <h3>Join as Volunteer</h3>
                  <p>Help your community respond</p>
                  <Button variant="outline" className="action-button" asChild>
                    <Link href="/volunteer">Sign Up</Link>
                  </Button>
                </div>

                <div className="action-card">
                  <Phone className="action-icon contact" />
                  <h3>Emergency Contacts</h3>
                  <p>Quick access to emergency services</p>
                  <Button variant="outline" className="action-button">
                    View Contacts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;