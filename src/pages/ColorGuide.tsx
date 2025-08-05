import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, ArrowLeft, Zap } from 'lucide-react';

const ColorGuide: React.FC = () => {
  const scrollToColorCheck = () => {
    const element = document.getElementById('ai-color-check');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const colorPalettes = [
    {
      name: 'Warm Tones',
      description: 'Perfect for those with warm undertones in their skin',
      colors: ['#FFB347', '#FF6B35', '#D2691E', '#CD853F', '#F4A460'],
      skinTones: 'Golden, peachy, or yellow undertones',
      tips: 'These colors will make your skin glow and look radiant'
    },
    {
      name: 'Cool Tones',
      description: 'Ideal for those with cool undertones in their skin',
      colors: ['#6495ED', '#9370DB', '#48CAE4', '#06FFA5', '#B19CD9'],
      skinTones: 'Pink, red, or blue undertones',
      tips: 'These colors complement cool skin tones beautifully'
    },
    {
      name: 'Neutral Tones',
      description: 'Versatile colors that work with most skin tones',
      colors: ['#F5F5DC', '#D2B48C', '#A0A0A0', '#708090', '#2F4F4F'],
      skinTones: 'Balanced or hard-to-determine undertones',
      tips: 'Safe choices that create sophisticated, timeless looks'
    }
  ];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Color Match Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover which color palettes complement your skin tone and enhance your natural beauty
          </p>
        </div>

        {/* Color Palettes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {colorPalettes.map((palette, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="h-8 w-8 text-pink-500" />
                  <h3 className="text-2xl font-bold text-gray-800">{palette.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{palette.description}</p>
                
                {/* Color Swatches */}
                <div className="flex space-x-2 mb-6">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-12 h-12 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Best for:</h4>
                    <p className="text-gray-600 text-sm">{palette.skinTones}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Style Tip:</h4>
                    <p className="text-gray-600 text-sm">{palette.tips}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToColorCheck}
              className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Zap className="h-5 w-5" />
              <span>Analyze My Colors</span>
            </button>
            
            <Link
              to="/"
              className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* AI Color Check Section */}
        <div id="ai-color-check" className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Color Analysis</h2>
            <p className="text-lg text-gray-600">
              Get personalized color recommendations based on your unique features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How it works:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Upload a clear photo of yourself in natural lighting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Our AI analyzes your skin tone, hair, and eye color</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Receive personalized color palette recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Link
                to="/outfit-advisor"
                className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Color Analysis</span>
                <Zap className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorGuide;