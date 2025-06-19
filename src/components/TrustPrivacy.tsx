
import React from 'react';

const TrustPrivacy = () => {
  const features = [
    {
      icon: "🕵️‍♂️",
      title: "Complete Anonymity",
      description: "We never ask for your name, email, or any personal information. Your identity stays protected."
    },
    {
      icon: "🔐",
      title: "End-to-End Encryption", 
      description: "All feedback is encrypted from your device to our servers. Even we can't trace it back to you."
    },
    {
      icon: "🚫",
      title: "No Sign-In Required",
      description: "Submit feedback instantly without creating accounts or providing any personal details."
    },
    {
      icon: "🇮🇳",
      title: "India Privacy Compliant",
      description: "Built following Indian data protection standards and digital privacy guidelines."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Privacy is Our Priority
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've built FixMySchool with privacy-first technology. Your voice matters, but your identity stays completely protected.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            We Can't Track You, Even If We Wanted To
          </h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Our technical architecture ensures that once you submit feedback, there's no way to connect it back to your device, location, or identity. This isn't just a promise - it's how we've built the system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustPrivacy;
