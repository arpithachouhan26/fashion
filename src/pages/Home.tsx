import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Sparkles, Heart, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Lovable
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Your personal AI fashion assistant that helps you discover your perfect style with confidence and love.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/outfit-advisor"
                  className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Outfit Advice</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                
                <button
                  onClick={scrollToHowItWorks}
                  className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>How it Works</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fashion app user"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-pink-400 text-white p-3 rounded-full">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get personalized fashion advice in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Upload className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Upload Your Outfit</h3>
              <p className="text-gray-600">
                Take a photo of your outfit or describe what you're wearing. Our AI will analyze your style.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="h-10 w-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Get AI Analysis</h3>
              <p className="text-gray-600">
                Our intelligent system provides personalized feedback and suggestions based on your style.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Heart className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Love Your Look</h3>
              <p className="text-gray-600">
                Receive tailored advice on colors, accessories, and styling tips to enhance your confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Style?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of fashion lovers who've discovered their perfect style with Lovable.
          </p>
          <Link
            to="/outfit-advisor"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <span>Start Your Style Journey</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;