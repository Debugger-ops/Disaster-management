import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';
import {
  AlertTriangle,
  Users,
  MapPin,
  Search,
  Clock,
  Navigation
} from 'lucide-react';
import './MapSidebar.css';

const MapSidebar: React.FC = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const recentReports = [
    {
      id: 1,
      type: 'disaster',
      title: 'Flooding on Main Street',
      severity: 'high',
      address: '123 Main St',
      time: '2 hours ago',
      volunteers: 3,
      status: 'active'
    },
    {
      id: 2,
      type: 'help_needed',
      title: 'Elderly Person Needs Help',
      severity: 'urgent',
      address: '456 Oak Ave',
      time: '45 min ago',
      volunteers: 1,
      status: 'responding'
    },
    {
      id: 3,
      type: 'volunteer',
      title: 'Medical Team Available',
      severity: 'info',
      address: '789 Pine St',
      time: '1 hour ago',
      volunteers: 8,
      status: 'available'
    },
    {
      id: 4,
      type: 'disaster',
      title: 'Power Lines Down',
      severity: 'high',
      address: '321 Elm St',
      time: '3 hours ago',
      volunteers: 2,
      status: 'active'
    }
  ];

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      urgent: 'severity-urgent',
      high: 'severity-high',
      medium: 'severity-medium',
      low: 'severity-low',
      info: 'severity-info'
    };
    return colors[severity] || colors.info;
  };

  const getTypeIcon = (type: string) => {
    const icons: Record<string, React.ElementType> = {
      disaster: AlertTriangle,
      help_needed: MapPin,
      volunteer: Users
    };
    return icons[type] || MapPin;
  };

  return (
    <div className="map-sidebar">
      <div className="sidebar-header">
        <div className="header-top">
          <h2 className="sidebar-title">Live Reports</h2>
          <Badge variant="outline" className="live-badge">
            <div className="pulse-dot"></div>
            Live
          </Badge>
        </div>
        <div className="sidebar-filters">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <Input
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Reports</SelectItem>
              <SelectItem value="disaster">Disasters</SelectItem>
              <SelectItem value="help_needed">Help Needed</SelectItem>
              <SelectItem value="volunteer">Volunteers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="sidebar-stats">
        <div className="stats-box">
          <div className="stat-number red">12</div>
          <div className="stat-label">Active</div>
        </div>
        <div className="stats-box">
          <div className="stat-number blue">47</div>
          <div className="stat-label">Volunteers</div>
        </div>
      </div>

      <div className="reports-list">
        {recentReports.map((report) => {
          const Icon = getTypeIcon(report.type);
          return (
            <Card key={report.id} className="report-card">
              <CardContent className="report-content">
                <div className="report-main">
                  <div className="report-icon">
                    <Icon className="icon-small" />
                  </div>
                  <div className="report-body">
                    <div className="report-header">
                      <h3 className="report-title">{report.title}</h3>
                      <Badge variant="outline" className={`report-severity ${getSeverityColor(report.severity)}`}>
                        {report.severity}
                      </Badge>
                    </div>
                    <div className="report-address">
                      <MapPin className="icon-tiny" />
                      <span>{report.address}</span>
                    </div>
                    <div className="report-footer">
                      <div className="report-time">
                        <Clock className="icon-tiny" />
                        {report.time}
                      </div>
                      <div className="report-volunteers">
                        <Users className="icon-tiny blue" />
                        {report.volunteers}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="sidebar-actions">
        <Button className="action-button report" size="sm">
          <AlertTriangle className="icon-small" />
          Report Emergency
        </Button>
        <Button variant="outline" className="action-button location" size="sm">
          <Navigation className="icon-small" />
          Find My Location
        </Button>
      </div>
    </div>
  );
};

export default MapSidebar;
