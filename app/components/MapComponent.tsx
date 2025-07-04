import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
    MapPin,
    AlertTriangle,
    Users,
    Navigation,
    Zap,
    Home
} from 'lucide-react';
import './MapComponent.css';

type Report = {
    id: number;
    type: 'disaster' | 'help_needed' | 'volunteer';
    title: string;
    severity: 'urgent' | 'high' | 'medium' | 'low' | 'info';
    location: { lat: number; lng: number };
    address: string;
    time: string;
    description: string;
    volunteers: number;
    status: 'active' | 'responding' | 'available';
};

const MapComponent: React.FC = () => {
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);

    const reports: Report[] = [
        {
            id: 1,
            type: 'disaster',
            title: 'Flooding on Main Street',
            severity: 'high',
            location: { lat: 40.7128, lng: -74.006 },
            address: '123 Main St, Downtown',
            time: '2 hours ago',
            description: 'Street flooding blocking traffic, water level rising',
            volunteers: 3,
            status: 'active'
        },
        {
            id: 2,
            type: 'help_needed',
            title: 'Elderly Person Needs Evacuation',
            severity: 'urgent',
            location: { lat: 40.7589, lng: -73.9851 },
            address: '456 Oak Ave, Apartment 3B',
            time: '45 minutes ago',
            description: 'Elderly resident needs assistance evacuating due to nearby flooding',
            volunteers: 1,
            status: 'responding'
        },
        {
            id: 3,
            type: 'volunteer',
            title: 'Medical Team Available',
            severity: 'info',
            location: { lat: 40.7282, lng: -73.7949 },
            address: 'Community Center, 789 Pine St',
            time: '1 hour ago',
            description: 'Medical volunteers with supplies ready to assist',
            volunteers: 8,
            status: 'available'
        }
    ];

    const getSeverityColor = (severity: Report['severity']) => {
        const colors: Record<Report['severity'], string> = {
            urgent: 'bg-red-500',
            high: 'bg-orange-500',
            medium: 'bg-yellow-500',
            low: 'bg-blue-500',
            info: 'bg-green-500'
        };
        return colors[severity];
    };

    const getTypeIcon = (type: Report['type']) => {
        const icons: Record<Report['type'], React.ElementType> = {
            disaster: AlertTriangle,
            help_needed: Home,
            volunteer: Users
        };
        return icons[type] || MapPin;
    };

    return (
        <div className="map-wrapper">
            <div className="map-header">
                <div className="map-header-content">
                    <div className="map-header-left">
                        <h1 className="map-title">Live Disaster Map</h1>
                        <Badge variant="outline" className="map-badge">
                            <div className="live-dot"></div>
                            Live Updates
                        </Badge>
                    </div>
                    <div className="map-header-right">
                        <Button variant="outline" size="sm">
                            <Navigation className="icon-small" />
                            My Location
                        </Button>
                        <Button size="sm" className="report-button">
                            <AlertTriangle className="icon-small" />
                            Report Emergency
                        </Button>
                    </div>
                </div>
            </div>

            <div className="map-area">
                <div className="map-grid-lines">
                    {[...Array(20)].map((_, i) => (
                        <div key={`h-${i}`} className="map-h-line" style={{ top: `${i * 5}%` }} />
                    ))}
                    {[...Array(20)].map((_, i) => (
                        <div key={`v-${i}`} className="map-v-line" style={{ left: `${i * 5}%` }} />
                    ))}
                </div>

                {reports.map((report, index) => {
                    const Icon = getTypeIcon(report.type);
                    return (
                        <div
                            key={report.id}
                            className="map-pin"
                            style={{
                                left: `${30 + index * 20}%`,
                                top: `${40 + index * 15}%`
                            }}
                            onClick={() => setSelectedReport(report)}
                        >
                            <div className={`pin-icon ${getSeverityColor(report.severity)}`}>
                                <Icon className="icon-white" />
                            </div>
                            <div className="pin-pointer"></div>
                        </div>
                    );
                })}

                <div className="map-legend">
                    <div className="legend-title">Legend</div>
                    <div className="legend-list">
                        <div className="legend-item"><div className="dot red"></div>Urgent Emergency</div>
                        <div className="legend-item"><div className="dot orange"></div>High Priority</div>
                        <div className="legend-item"><div className="dot blue"></div>Help Needed</div>
                        <div className="legend-item"><div className="dot green"></div>Volunteers Available</div>
                    </div>
                </div>
            </div>

            {selectedReport && (
                <div className="modal-overlay">
                    <Card className="modal-card">
                        <CardHeader>
                            <div className="modal-header">
                                <div className="modal-title">
                                    <div className={`dot ${getSeverityColor(selectedReport.severity)}`}></div>
                                    <CardTitle>{selectedReport.title}</CardTitle>
                                </div>
                                <Button
                                    variant="outline" // instead of "ghost"
                                    size="sm"
                                    onClick={() => setSelectedReport(null)}
                                    className="modal-close"
                                >
                                    ×
                                </Button>

                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="info-item"><MapPin className="icon-small" /><span>{selectedReport.address}</span></div>
                            <div className="info-item"><Zap className="icon-small" /><span>Reported {selectedReport.time}</span></div>
                            <p>{selectedReport.description}</p>
                            <div className="modal-footer">
                                <div className="volunteer-count"><Users className="icon-small blue" /><span>{selectedReport.volunteers} volunteers</span></div>
                                <Button size="sm" className="help-button">I Can Help</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default MapComponent;
