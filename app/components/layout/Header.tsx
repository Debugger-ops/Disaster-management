'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import {
  MapPin,
  Zap,
  X,
  Menu,
  AlertTriangle,
  Activity,
  Shield, Home
} from 'lucide-react';
import Link from 'next/link';
import './Header.css'; // Assuming you have a CSS file for styles
type NavLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'default' | 'primary';
};



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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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
  );
};

export default Header;
