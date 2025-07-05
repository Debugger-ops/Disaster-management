# Disaster Management System

A comprehensive web application for disaster management, emergency response coordination, and volunteer management. Built with modern web technologies to provide real-time disaster monitoring, emergency reporting, and resource coordination.

## 🚨 Features

### Core Functionality
- **Real-time Emergency Reporting** - Report and track emergencies in real-time
- **Interactive Map Integration** - Visual disaster mapping with location-based services
- **Volunteer Management** - Coordinate volunteers and manage disaster response teams
- **Emergency Dashboard** - Centralized dashboard for emergency response coordination
- **Resource Management** - Track and allocate emergency resources
- **Statistics & Analytics** - Monitor disaster response metrics and performance

### Key Components
- **Emergency Response System** - Quick emergency reporting and alert system
- **Interactive Maps** - Location-based disaster tracking and visualization
- **Volunteer Portal** - Registration, coordination, and task assignment for volunteers
- **Administrative Dashboard** - Comprehensive overview of all disaster management activities
- **Quick Actions Panel** - Fast access to critical emergency functions

## 🛠️ Technology Stack

### Frontend
- **React/Next.js** - Modern React framework with server-side rendering
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Leaflet** - Interactive maps and geospatial visualization
- **Custom UI Components** - Reusable component library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database for flexible data storage
- **Node.js** - JavaScript runtime environment

### Development Tools
- **Custom Hooks** - Reusable React hooks for mobile detection and notifications
- **TypeScript Types** - Comprehensive type definitions
- **Responsive Design** - Mobile-first responsive layouts

## 📁 Project Structure

```
disaster-management/
├── components/           # Reusable UI components
│   ├── HeroSection.*    # Landing page hero section
│   ├── MapComponent.*   # Interactive map components
│   ├── MapLeaflet.tsx   # Leaflet map integration
│   ├── MapSidebar.*     # Map sidebar with controls
│   ├── QuickActions.*   # Emergency quick action buttons
│   ├── StatsSection.*   # Statistics and metrics display
│   ├── layout/          # Layout components
│   └── ui/              # Base UI components
├── pages/               # Next.js pages
│   ├── dashboard/       # Administrative dashboard
│   ├── map/            # Interactive disaster map
│   ├── report/         # Emergency reporting interface
│   ├── resources/      # Resource management
│   └── volunteer/      # Volunteer management portal
├── api/                # API endpoints
│   ├── emergency/      # Emergency-related API routes
│   ├── test-connection/ # Database connection testing
│   └── volunteer/      # Volunteer management APIs
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries and database connections
├── models/             # Data models and schemas
└── types/              # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd disaster-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_API_URL=your_api_url
   NEXT_PUBLIC_MAP_API_KEY=your_map_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Usage

### Emergency Reporting
1. Navigate to the **Report** section
2. Fill in emergency details (location, type, severity)
3. Submit report for immediate processing
4. Track report status in real-time

### Volunteer Management
1. Access the **Volunteer** portal
2. Register new volunteers or manage existing ones
3. Assign tasks and coordinate response efforts
4. Track volunteer availability and skills

### Disaster Monitoring
1. Use the **Interactive Map** to view active disasters
2. Monitor real-time emergency reports
3. Analyze disaster patterns and trends
4. Coordinate response efforts geographically

### Administrative Dashboard
1. Access comprehensive disaster management overview
2. Monitor system statistics and performance
3. Manage resources and allocations
4. Generate reports and analytics

## 🔧 API Endpoints

### Emergency Management
- `POST /api/emergency` - Create new emergency report
- `GET /api/emergency` - Retrieve emergency reports
- `PUT /api/emergency/:id` - Update emergency status

### Volunteer Management
- `POST /api/volunteer` - Register new volunteer
- `GET /api/volunteer` - Get volunteer list
- `PUT /api/volunteer/:id` - Update volunteer information

### System Health
- `GET /api/test-connection` - Test database connectivity

## 🌐 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
Ensure all production environment variables are configured:
- Database connections
- API keys
- External service credentials

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use meaningful component and variable names
- Implement proper error handling
- Write responsive, accessible UI components

### Testing
- Test API endpoints thoroughly
- Verify mobile responsiveness
- Test emergency reporting workflows
- Validate volunteer management features

## 🆘 Emergency Contact

For system-related emergencies or critical issues:
- Check system status dashboard
- Review error logs and monitoring
- Contact system administrators
- Follow disaster response protocols

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Emergency response teams and first responders
- Volunteer coordinators and disaster management professionals
- Open source mapping and geospatial communities
- Contributors and maintainers

---

**⚠️ Important**: This system is designed to support disaster management efforts. Always follow official emergency protocols and contact appropriate authorities for actual emergencies.
