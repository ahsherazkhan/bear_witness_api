'use client'

import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const TrialSignupSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const benefits = [
    // {
    //   icon: "Calendar",
    //   title: "500 posts per month for free",
    //   description: "Full access to all features"
    // },
    {
      icon: "CreditCard", 
      title: "No Credit Card Required",
      description: "Start immediately"
    },
    {
      icon: "BarChart3",
      title: "500 posts per month for free",
      description: "Test with real content"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="trial-signup" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-lg p-12 border border-gray-200 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} color="#000000" />
            </div>
            
            <h2 className="text-3xl font-bold text-black mb-4">
              Welcome to Bear Witness AI!
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Your free trial is now active. Check your email for login credentials.
            </p>
            
            <Button
              variant="default"
              size="lg"
              className="bg-black hover:bg-gray-800 text-white"
              iconName="ExternalLink"
              iconPosition="right"
            >
              Access Dashboard
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="trial-signup" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Start Your Free Trial
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              No credit card required.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit.icon} size={20} color="#ffffff" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Get Started
                </h3>
                <p className="text-gray-600">
                  Create your account in seconds
                </p>
              </div>
              
              <Input
                label="Full Name"
                type="text"
                name="fullName"
                placeholder="John Smith"
                value={formData.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
                required
              />
              
              <Input
                label="Work Email"
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
              
              <Input
                label="Company Name"
                type="text"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleInputChange}
                error={errors.company}
                required
              />
              
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                error={errors.agreeToTerms}
                required
              />
              
              <Button
                type="submit"
                variant="default"
                fullWidth
                size="lg"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="bg-black hover:bg-gray-800 text-white font-semibold"
                iconName="ArrowRight"
                iconPosition="right"
              >
                {isSubmitting ? 'Creating Account...' : 'Start Free Trial'}
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Shield" size={14} />
                    <span>Secure signup</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>Instant access</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSignupSection;