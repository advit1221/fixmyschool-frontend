
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, MessageCircle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-15 animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-green-300 rounded-full opacity-15 animate-bounce delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Floating Icons */}
        <div className="absolute -top-10 -left-10 hidden lg:block animate-float">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="absolute -top-5 -right-5 hidden lg:block animate-float delay-1000">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/4 hidden lg:block animate-float delay-500">
          <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-7 h-7 text-purple-600" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            🇮🇳 Built for Indian Schools
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Your Voice.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              A Better School.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An anonymous feedback platform for students. A dashboard for real school change.
            <br />
            <span className="font-semibold text-gray-700">Safe, secure, and built for India's education system.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/submit-feedback">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Submit Feedback
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('dashboard-preview')}
            >
              See Dashboard Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">100% Anonymous</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
              <span className="text-gray-700 font-medium">No Registration Required</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-400"></div>
              <span className="text-gray-700 font-medium">End-to-End Encrypted</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Anonymous & Secure</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">Personal Data Collected</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Available for Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
