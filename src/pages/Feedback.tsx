import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Share2, RotateCcw } from 'lucide-react';

const Feedback: React.FC = () => {
  const positiveComments = [
    "Your color choices are absolutely stunning! The way you've combined these tones shows great fashion intuition.",
    "Love this look! Your style has such a sophisticated and confident vibe that really suits you.",
    "This outfit has such great balance and proportions. You've really nailed the modern chic aesthetic!",
    "Your fashion sense is on point! This combination shows you understand how to create visual harmony.",
    "Beautiful styling! You've created a look that's both trendy and timeless."
  ];

  const accessorySuggestions = [
    "Add a delicate gold necklace to elevate the neckline",
    "Consider a structured handbag in cognac leather",
    "A silk scarf in complementary colors would add sophistication",
    "Statement earrings would beautifully frame your face",
    "A classic watch would add both style and functionality"
  ];

  const colorSuggestions = [
    "Try incorporating more warm earth tones like terracotta or sage green",
    "Deep jewel tones like emerald or sapphire would complement your palette",
    "Soft pastels like blush pink or lavender would create a romantic feel",
    "Rich burgundy or navy would add depth to your color story",
    "Cream and camel tones would create a sophisticated neutral base"
  ];

  const randomComment = positiveComments[Math.floor(Math.random() * positiveComments.length)];
  const randomAccessory = accessorySuggestions[Math.floor(Math.random() * accessorySuggestions.length)];
  const randomColor = colorSuggestions[Math.floor(Math.random() * colorSuggestions.length)];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Here's what we think! ✨
          </h1>
          <p className="text-lg text-gray-600">
            Our AI has analyzed your style and here's our personalized feedback
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Feedback Card */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 border border-pink-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Overall Assessment</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {randomComment}
                </p>
              </div>
            </div>
          </div>

          {/* Suggestions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Accessory Suggestions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Accessory Ideas</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {randomAccessory}
              </p>
            </div>

            {/* Color Suggestions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-green-100 to-teal-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Color Palette</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {randomColor}
              </p>
            </div>
          </div>

          {/* Style Score */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-yellow-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Style Score</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  {Math.floor(Math.random() * 11) + 85}
                </div>
                <div className="text-2xl text-gray-600">/100</div>
              </div>
              <p className="text-gray-600">
                Excellent fashion sense! You have a great eye for style and color coordination.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/outfit-advisor"
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Try Another Outfit</span>
            </Link>
            
            <button className="flex-1 flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              <Share2 className="h-5 w-5" />
              <span>Share Look</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;