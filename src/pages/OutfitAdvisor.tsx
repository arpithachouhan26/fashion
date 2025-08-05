import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Upload, ArrowLeft, Lightbulb } from 'lucide-react';

const OutfitAdvisor: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile || description.trim()) {
      navigate('/feedback');
    }
  };

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Upload Your Outfit
          </h1>
          <p className="text-lg text-gray-600">
            Let our AI analyze your style and provide personalized feedback
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* File Upload Section */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Upload Photo
            </label>
            <div className="border-2 border-dashed border-pink-200 rounded-2xl p-8 text-center hover:border-pink-300 transition-colors duration-200">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center space-y-4"
              >
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Upload className="h-8 w-8 text-pink-500" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    {selectedFile ? selectedFile.name : 'Click to upload your outfit photo'}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    PNG, JPG, or JPEG (max 10MB)
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Describe Your Look
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about your outfit, the occasion, or any specific concerns you have..."
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-300 focus:outline-none transition-colors duration-200 resize-none"
            />
          </div>

          {/* Pro Tip Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
            <div className="flex items-start space-x-3">
              <Lightbulb className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Pro Tip</h3>
                <p className="text-blue-700">
                  Use good lighting and take a full-body photo for the best AI analysis results. 
                  Natural lighting works best!
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSubmit}
              disabled={!selectedFile && !description.trim()}
              className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Get My Fashion Advice
            </button>
            
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutfitAdvisor;