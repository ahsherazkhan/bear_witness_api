import Icon from '../../../components/AppIcon';
import React, { useState, useEffect } from 'react';

const ProblemSection = () => {
  const problemStats = [
    {
      icon: "TrendingUp",
      stat: "73%",
      description: "Increase in AI-generated content on social media in 2024",
      color: "text-red-500"
    },
    {
      icon: "AlertTriangle",
      stat: "$2.8M",
      description: "Average brand damage cost from fake content incidents",
      color: "text-orange-500"
    },
    {
      icon: "Clock",
      stat: "4.5 hours",
      description: "Daily time wasted on manual content verification",
      color: "text-yellow-500"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Marketing",
      incident: "AI-generated fake product reviews spread across Twitter, causing 23% drop in quarterly sales",
      impact: "Lost $1.2M in revenue",
      timeToDetect: "72 hours"
    },
    {
      company: "Fashion Brand X",
      incident: "Deepfake influencer endorsements created false brand associations",
      impact: "Brand reputation crisis",
      timeToDetect: "5 days"
    },
    {
      company: "News Agency Pro",
      incident: "AI-written fake news articles attributed to their journalists",
      impact: "Legal action & credibility loss",
      timeToDetect: "1 week"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('problem-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStat((prev) => (prev + 1) % problemStats.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The AI Content Crisis is
            <span className="text-red-500"> Real & Growing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day, thousands of brands fall victim to AI-generated content that damages their reputation, 
            misleads their audience, and costs millions in recovery efforts.
          </p>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problemStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 card-shadow hover:shadow-lg smooth-transition">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                  <Icon name={stat.icon} size={32} />
                </div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.stat}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Damage Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Real Brand Damage Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow border-l-4 border-red-500">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="AlertCircle" size={16} color="#ef4444" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{study.company}</h4>
                    <div className="text-sm text-red-600 font-medium">Time to Detect: {study.timeToDetect}</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {study.incident}
                </p>
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="text-red-700 font-semibold text-sm">Impact:</div>
                  <div className="text-red-600 text-sm">{study.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual Verification Pain Points */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Manual Verification is Broken
            </h3>
            <p className="text-muted-foreground text-lg">
              Current methods are slow, unreliable, and can't keep up with AI advancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Icon name="Clock" size={32} color="#6b7280" className="mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-600 mb-2">4.5 hrs</div>
              <div className="text-sm text-muted-foreground">Daily verification time</div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Icon name="XCircle" size={32} color="#6b7280" className="mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-600 mb-2">67%</div>
              <div className="text-sm text-muted-foreground">False negative rate</div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Icon name="DollarSign" size={32} color="#6b7280" className="mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-600 mb-2">$180K</div>
              <div className="text-sm text-muted-foreground">Annual verification costs</div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Icon name="Users" size={32} color="#6b7280" className="mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-600 mb-2">3-5</div>
              <div className="text-sm text-muted-foreground">Team members needed</div>
            </div>
          </div>
        </div>
                <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            The AI Content Crisis is
            <span className="text-red-400"> Real</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Artificial intelligence is flooding social media with fake content, threatening authenticity and trust across all industries.
          </p>
        </div>

        {/* Animated Statistics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {problemStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-800 border border-gray-700 rounded-xl p-8 text-center transition-all duration-500 ${
                currentStat === index ? 'scale-105 border-red-500 shadow-2xl shadow-red-500/20' : 'hover:border-gray-600'
              }`}
            >
              <div className="flex justify-center mb-4">
                <Icon
                  name={stat.icon}
                  size={48}
                  className={`${stat.color} ${currentStat === index ? 'animate-pulse' : ''}`}
                />
              </div>
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <Icon name="AlertCircle" size={48} className="text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Let AI Content Destroy Your Credibility
            </h3>
            <p className="text-gray-300 mb-6">
              Every day you wait, more fake content infiltrates your industry. Take action now to protect your brand's authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-gray-800 border border-gray-700 rounded-lg px-6 py-3">
                <div className="text-red-400 font-bold text-lg">47,392</div>
                <div className="text-gray-400 text-sm">Posts analyzed today</div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg px-6 py-3">
                <div className="text-orange-400 font-bold text-lg">847,293</div>
                <div className="text-gray-400 text-sm">AI content detected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;