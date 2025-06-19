
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { School, BarChart3, Shield, Users, TrendingUp, AlertTriangle, CheckCircle, QrCode } from 'lucide-react';

const ForSchools = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Get instant insights into student concerns with visual dashboards and trend analysis."
    },
    {
      icon: AlertTriangle,
      title: "Early Problem Detection",
      description: "Identify issues like bullying or safety concerns before they escalate into bigger problems."
    },
    {
      icon: TrendingUp,
      title: "Improvement Tracking",
      description: "Monitor how your interventions are working with before-and-after feedback analysis."
    },
    {
      icon: Shield,
      title: "Anonymous System",
      description: "Students feel safe to share honest feedback, giving you accurate data to work with."
    }
  ];

  const features = [
    {
      title: "Dashboard Overview",
      description: "Get a bird's-eye view of all feedback with categorized summaries and priority indicators."
    },
    {
      title: "Issue Heatmaps",
      description: "Visual representation of problem areas across different departments and time periods."
    },
    {
      title: "Sentiment Analysis",
      description: "Understand the emotional tone of feedback to gauge student satisfaction levels."
    },
    {
      title: "Action Recommendations",
      description: "AI-powered suggestions for addressing common issues based on successful interventions."
    },
    {
      title: "Progress Tracking",
      description: "Monitor improvement over time with detailed reports and analytics."
    },
    {
      title: "Export & Sharing",
      description: "Generate reports for staff meetings, board presentations, or regulatory compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <School className="w-12 h-12 text-green-600" />
            <span className="text-green-600 font-semibold text-lg">For School Administrators</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Student Feedback Into
            <span className="text-green-600"> School Improvement</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Give your students a safe voice while gaining powerful insights to create a better learning environment.
            Data-driven decisions for Indian schools.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
            Request Free Demo
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Schools Choose FixMySchool
            </h2>
            <p className="text-lg text-gray-600">
              Built specifically for the challenges faced by Indian educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Dashboard Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to understand and improve your school environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Completely Free for All Schools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We are working for a cause. Currently, FixMySchool is free to use for everyone. 
              If you'd like to support our mission, you can donate via the QR code below.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹0</span>
                <span className="text-gray-600">/forever</span>
              </div>
              <p className="text-gray-600 mb-8">For all Indian schools and educational institutions</p>
              
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited students</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Complete dashboard access</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Real-time analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">24/7 platform availability</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Anonymous student feedback</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-8">
                Get Started Free
              </Button>

              {/* Donation Section */}
              <div className="border-t border-green-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Support Our Mission</h4>
                <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                  <QrCode className="w-24 h-24 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Donation QR Code Placeholder</p>
                </div>
                <p className="text-sm text-gray-600">
                  Your donations help us keep FixMySchool free and improve student voices across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForSchools;
