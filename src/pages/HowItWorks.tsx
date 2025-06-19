
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { School, Shield, Users, BarChart3, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const studentSteps = [
    {
      icon: MessageCircle,
      title: "Choose Issue Category",
      description: "Select from categories like bullying, cleanliness, teaching quality, or safety concerns."
    },
    {
      icon: Shield,
      title: "Share Anonymously",
      description: "Write your feedback without revealing your identity. No login or personal information required."
    },
    {
      icon: CheckCircle,
      title: "Submit Securely",
      description: "Your feedback is encrypted and sent anonymously to your school's dashboard."
    }
  ];

  const schoolSteps = [
    {
      icon: BarChart3,
      title: "Receive Insights",
      description: "Get categorized feedback data through clear, actionable dashboards."
    },
    {
      icon: Users,
      title: "Analyze Patterns",
      description: "Identify trends and recurring issues across different areas of your school."
    },
    {
      icon: School,
      title: "Take Action",
      description: "Implement targeted improvements based on real student feedback and concerns."
    }
  ];

  const categories = [
    { name: "Bullying & Harassment", color: "bg-red-100 text-red-800" },
    { name: "Teacher Behavior", color: "bg-blue-100 text-blue-800" },
    { name: "Cleanliness & Hygiene", color: "bg-green-100 text-green-800" },
    { name: "Academic Issues", color: "bg-purple-100 text-purple-800" },
    { name: "Mental Health Support", color: "bg-pink-100 text-pink-800" },
    { name: "Infrastructure", color: "bg-orange-100 text-orange-800" },
    { name: "Food Quality", color: "bg-yellow-100 text-yellow-800" },
    { name: "Safety Concerns", color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How FixMySchool Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, secure process that gives students a voice and schools actionable insights for positive change.
          </p>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Students
            </h2>
            <p className="text-lg text-gray-600">
              Share your concerns safely and anonymously in just three steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {studentSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < studentSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/submit-feedback">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Submit Your Feedback Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Issue Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Can You Report?
            </h2>
            <p className="text-lg text-gray-600">
              We've organized feedback into clear categories to help you find the right one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} rounded-lg px-4 py-3 text-center font-medium text-sm`}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Schools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Schools
            </h2>
            <p className="text-lg text-gray-600">
              Turn student feedback into actionable improvements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {schoolSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < schoolSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/for-schools">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Request School Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
