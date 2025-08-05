import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/outfit-advisor', label: 'Outfit Advisor' },
    { path: '/color-guide', label: 'Color Guide' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Heart className="h-8 w-8 text-pink-400 group-hover:text-pink-500 transition-colors duration-200" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Lovable
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-pink-100 text-pink-600'
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-pink-100 text-pink-600'
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;