
import React from 'react';
import { School, ArrowDown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Student Submits Feedback",
      description: "Students share their concerns anonymously - no login, no tracking, complete privacy.",
      icon: "📝"
    },
    {
      number: "02", 
      title: "Data Gets Processed",
      description: "Feedback is automatically categorized and anonymized using secure encryption.",
      icon: "🔒"
    },
    {
      number: "03",
      title: "School Receives Insights",
      description: "Schools get actionable data through clear dashboards to improve student experience.",
      icon: "📊"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <School className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Safe, Effective
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From anonymous student feedback to actionable school insights in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center relative z-10 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4 mb-4">
                    <ArrowDown className="w-5 h-5 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Split Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          {/* For Students */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">For Students</h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Share concerns about bullying, cleanliness, teaching quality</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Complete anonymity - no login required</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Help improve your school environment</span>
              </li>
            </ul>
          </div>

          {/* For Schools */}
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">For Schools</h3>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Real-time insights into student concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Data-driven improvement recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Early detection of serious issues</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
