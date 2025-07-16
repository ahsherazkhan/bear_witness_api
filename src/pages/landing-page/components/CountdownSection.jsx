'use client'

import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTrial = () => {
    const element = document.getElementById('trial-signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: "Percent",
      title: "50% Off First Year",
      description: "Save $594 on Professional plan"
    },
    {
      icon: "Gift",
      title: "Extended 14-Day Trial",
      description: "Double the trial period"
    },
    {
      icon: "Zap",
      title: "Priority Onboarding",
      description: "Skip the queue, get started faster"
    },
    {
      icon: "Users",
      title: "Free Team Training",
      description: "1-hour session with our experts"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-orange-500 to-red-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="Clock" size={16} color="white" />
            <span className="text-white font-semibold text-sm">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Early Bird Special
            <br />
            <span className="text-yellow-200">Ends Soon!</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join the first 1,000 customers and get exclusive benefits. 
            This offer expires in:
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((unit, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wide">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} size={24} color="white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Exclusive Access Message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Users" size={24} color="white" />
              <span className="text-white font-semibold">Exclusive Early Access</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 847 Early Adopters
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Be among the first to experience next-generation AI content detection. 
              Early adopters get priority support, feature previews, and direct input on product development.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} />
                <span>VIP Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} />
                <span>Beta Features</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            variant="default"
            size="xl"
            onClick={scrollToTrial}
            className="bg-white text-accent hover:bg-gray-100 font-bold px-12 py-4 text-lg btn-shadow mb-4"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Claim Your Early Bird Discount
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} />
              <span>30-day money back</span>
            </div>
          </div>
        </div>

        {/* Urgency Indicators */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-red-300/30">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              Only 153 spots remaining at this price
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;