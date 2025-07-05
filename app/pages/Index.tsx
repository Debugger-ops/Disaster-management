'use client';

import React from 'react';
import Link from 'next/link';
import {
  AlertTriangle, Users, MapPin, Phone, Cloud, Activity,
  Shield, Clock, Heart, Zap, Home
} from 'lucide-react';
import { Menu, X } from 'lucide-react';

import { Button } from '../components/ui/button';
import {
  Card, CardContent, CardDescription,
  CardHeader, CardTitle
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const IndexPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
const [isMenuOpen, setIsMenuOpen] = React.useState(false);

React.useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const recentIncidents = [
    { id: 1, type: "Fire", location: "Downtown District", time: "2 min ago", severity: "high" },
    { id: 2, type: "Flood", location: "River Valley", time: "15 min ago", severity: "medium" },
    { id: 3, type: "Medical", location: "Central Park", time: "28 min ago", severity: "high" },
  ];

  const emergencyContacts = [
    { service: "Fire Department", number: "101", available: true },
    { service: "Police", number: "100", available: true },
    { service: "Medical Emergency", number: "112", available: true },
    { service: "Disaster Relief", number: "1078", available: true },
  ];

  const stats = [
    { label: "Active Volunteers", value: "2,847", icon: Users, change: "+12%" },
    { label: "Incidents Resolved", value: "15,234", icon: Shield, change: "+8%" },
    { label: "Response Time", value: "4.2 min", icon: Clock, change: "-15%" },
    { label: "Lives Saved", value: "892", icon: Heart, change: "+23%" },
  ];
  interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary";
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, variant = "default" }) => (

    <a
      href={href}
      className={`
        inline-flex items-center px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105
        ${variant === "primary" 
          ? "bg-gradient-to-r from-red-500 via-red-600 to-orange-600 text-white shadow-lg hover:shadow-xl hover:from-red-600 hover:to-orange-700" 
          : "text-gray-700 hover:text-red-600 hover:bg-white/60 backdrop-blur-sm border border-transparent hover:border-red-200 hover:shadow-md"
        }
      `}
    >
      {children}
    </a>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">

      {/* Header */}
 <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-red-100/50' 
        : 'bg-gradient-to-r from-white/95 via-white/90 to-red-50/90 backdrop-blur-sm'
      }
    `}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo Section */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">
            <NavLink href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </NavLink>
            <NavLink href="/map">
              <MapPin className="mr-2 h-4 w-4" />
              Live Crisis Map
            </NavLink>
            <NavLink href="/dashboard">
              <Activity className="mr-2 h-4 w-4" />
              Control Center
            </NavLink>
            <NavLink href="/resources">
              <Shield className="mr-2 h-4 w-4" />
              Resources
            </NavLink>
            <NavLink href="/report" variant="primary">
              <Zap className="mr-2 h-4 w-4" />
              Report Emergency
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/80 border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-200 transform hover:scale-105"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-red-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <NavLink href="/map">
                <MapPin className="mr-3 h-5 w-5" />
                Live Crisis Map
              </NavLink>
              <NavLink href="/dashboard">
                <Activity className="mr-3 h-5 w-5" />
                Control Center
              </NavLink>
              <NavLink href="/resources">
                <Shield className="mr-3 h-5 w-5" />
                Resources
              </NavLink>
              <NavLink href="/report" variant="primary">
                <Zap className="mr-3 h-5 w-5" />
                Report Emergency
              </NavLink>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-300/50 to-transparent"></div>
    </header>

     
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Activity className="mr-2 h-4 w-4" />
            Live Emergency Response System
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Rapid Response
            <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Saves Lives
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect first responders, volunteers, and communities in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 shadow-xl text-lg px-8 py-4">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Report Emergency Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Join as Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
            {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
       {/* Quick Actions & Live Feed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Zap className="mr-2 h-5 w-5 text-orange-600" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
                    <Link href="/report">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Report Emergency
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    <Link href="/map">
                      <MapPin className="mr-2 h-4 w-4" />
                      View Live Map
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full border-green-200 text-green-700 hover:bg-green-50">
                    <Link href="/volunteer">
                      <Users className="mr-2 h-4 w-4" />
                      Volunteer Sign-up
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Weather Alert */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-800 to-red-600 text-white mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Cloud className="mr-2 h-5 w-5" />
                    <span className="font-semibold">Weather Alert</span>
                  </div>
                  <p className="text-sm opacity-90">Severe thunderstorm warning in effect for downtown area until 8 PM.</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Incidents */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-xl">
                      <Activity className="mr-2 h-5 w-5 text-red-600" />
                      Recent Incidents
                    </span>
                    <Badge className="bg-red-100 text-red-800">Live</Badge>
                  </CardTitle>
                  <CardDescription>Real-time emergency response feed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentIncidents.map((incident) => (
                      <div key={incident.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-full ${
                            incident.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{incident.type}</p>
                            <p className="text-sm text-gray-600">{incident.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={incident.severity === 'high' ? 'destructive' : 'secondary'}>
                            {incident.severity}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{incident.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Incidents
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Emergency Contacts */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Emergency Contacts</h2>
            <p className="text-gray-400">Quick access to essential emergency services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">{contact.service}</h3>
                  <p className="text-2xl font-bold text-green-400 mb-2">{contact.number}</p>
                  <Badge className={contact.available ? 'bg-green-600' : 'bg-red-600'}>
                    {contact.available ? 'Available' : 'Busy'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Every Second Counts in an Emergency</h2>
          <p className="text-xl mb-10 opacity-90">
            Join our community of first responders and volunteers. Together, we can make a difference when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Report Emergency
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">DisasterAid</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting communities with rapid emergency response capabilities. 
                Built for those who serve and protect.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/training" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link href="/guidelines" className="hover:text-white transition-colors">Guidelines</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DisasterAid Platform. Built for communities, by communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
