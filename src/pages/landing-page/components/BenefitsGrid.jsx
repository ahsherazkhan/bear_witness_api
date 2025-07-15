import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: "Target",
      title: "99.5% Accuracy",
      description: "Industry-leading detection accuracy verified by third-party audits. Continuous updates against latest AI models.",
      features: [
        "Third-party verified",
        "Continuous updates", 
        "Low false positives",
        "50+ AI models supported"
      ]
    },
    {
      icon: "Zap", 
      title: "Sub-2 Second Detection",
      description: "Lightning-fast analysis for real-time monitoring. Bulk processing with consistent performance.",
      features: [
        "Real-time processing",
        "Bulk analysis support",
        "API response < 2s",
        "99.9% uptime SLA"
      ]
    },
    {
      icon: "Globe",
      title: "Universal Coverage",
      description: "Support for all major platforms and content types. Comprehensive API and browser integration.",
      features: [
        "15+ social platforms",
        "Website integration",
        "API & browser extension",
        "Mobile app support"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Why Choose Bear Witness AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core advantages that make us the trusted choice to help you detect ai content.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center mb-6">
                <Icon name={benefit.icon} size={32} color="#ffffff" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="#ffffff" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;