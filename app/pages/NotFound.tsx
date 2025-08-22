// app/pages/NotFound.tsx
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Link from "next/link";
import './NotFound.css';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! Page not found</p>
        <Link href="/" className="notfound-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
