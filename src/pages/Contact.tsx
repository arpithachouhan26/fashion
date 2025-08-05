import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowLeft, CheckCircle, Mail, MessageCircle, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Send us a message and we'll get back to you soon.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Success Message */}
          {showSuccess && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div>
                  <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                  <p className="text-green-700 mt-1">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-pink-500" />
                  <span>Name</span>
                </div>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-300 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-pink-500" />
                  <span>Email</span>
                </div>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-300 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-pink-500" />
                  <span>Message</span>
                </div>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us how we can help you with your fashion journey..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-300 focus:outline-none transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
              
              <Link
                to="/"
                className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">hello@lovable.com</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-gray-600">Available 9 AM - 6 PM PST</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Response Time</h3>
            <p className="text-gray-600">Within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;