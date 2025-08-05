import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Lovable
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Your personal AI fashion assistant, helping you discover your perfect style with confidence and love.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link></li>
              <li><Link to="/outfit-advisor" className="text-gray-600 hover:text-pink-500 transition-colors">Outfit Advisor</Link></li>
              <li><Link to="/color-guide" className="text-gray-600 hover:text-pink-500 transition-colors">Color Guide</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>hello@lovable.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-pink-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">&copy; 2025 Lovable. Made with love for fashion enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;