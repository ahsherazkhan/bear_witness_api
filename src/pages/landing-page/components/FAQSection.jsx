'use client'

import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How accurate is Bear Witness AI\'s detection?",
      answer: `Our AI detection achieves 99.5% accuracy, verified by independent third-party audits. We continuously update our models to stay ahead of the latest AI content generation techniques, including GPT-4, Claude, Gemini, and emerging models.\n\nOur accuracy is measured across:\n• Text-based content (99.7% accuracy)\n• Image analysis (99.3% accuracy)\n• Video content (99.1% accuracy)\n• Mixed media posts (99.4% accuracy)`,
      videoUrl: "https://www.youtube.com/embed/demo-accuracy",
      category: "Accuracy"
    },
    {
      question: "Which platforms and content types are supported?",
      answer: `Bear Witness AI supports comprehensive analysis across all major platforms:\n\n**Social Media Platforms:**\n• Twitter/X, Instagram, LinkedIn, Facebook\n• TikTok, YouTube, Reddit, Discord\n• Snapchat, Pinterest, Telegram\n\n**Content Types:**\n• Text posts and captions\n• Images and graphics\n• Videos and audio\n• Comments and replies\n• Stories and temporary content\n\n**Integration Methods:**\n• Direct URL analysis\n• API integration\n• Browser extension\n• Bulk upload processing`,
      videoUrl: null,
      category: "Platform Support"
    },
    {
      question: "How fast is the detection process?",
      answer: `Our detection speed averages 2.4 seconds per analysis:\n\n• Text analysis: 0.8-1.2 seconds\n• Image analysis: 1.5-2.5 seconds\n• Video analysis: 2.0-4.0 seconds\n• Bulk processing: 500+ posts per minute\n\nWe maintain 99.9% uptime with global server infrastructure ensuring consistent performance regardless of your location.`,
      videoUrl: "https://www.youtube.com/embed/demo-speed",
      category: "Performance"
    },
    {
      question: "How complex is the integration process?",
      answer: `Integration is designed to be simple and developer-friendly:\n\n**API Integration:**\n• RESTful API with comprehensive documentation\n• SDKs available for Python, JavaScript, PHP\n• Webhook support for real-time notifications\n• Rate limiting: 1000 requests/minute\n\n**Browser Extension:**\n• One-click installation\n• Works on Chrome, Firefox, Safari, Edge\n• Automatic detection on supported sites\n\n**Setup Time:**\n• API integration: 15-30 minutes\n• Browser extension: 2 minutes\n• Enterprise deployment: 1-2 days with support`,
      videoUrl: "https://www.youtube.com/embed/demo-integration",
      category: "Integration"
    },
    {
      question: "What about data privacy and security?",
      answer: `We prioritize data security and privacy compliance:\n\n**Security Measures:**\n• SOC 2 Type II certified\n• ISO 27001 compliant\n• End-to-end encryption\n• Zero data retention policy for analyzed content\n\n**Privacy Compliance:**\n• GDPR compliant\n• CCPA compliant\n• HIPAA available for enterprise\n• Regular security audits\n\n**Data Handling:**\n• Content analyzed in real-time, not stored\n• Only metadata retained for analytics\n• User data never shared with third parties`,
      videoUrl: null,
      category: "Security"
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: `We offer flexible options when you approach or exceed limits:\n\n**Soft Limits:**\n• 10% overage allowance included\n• Automatic notifications at 80% usage\n• Real-time usage dashboard\n\n**Upgrade Options:**\n• Instant plan upgrades\n• Pro-rated billing\n• Temporary limit increases available\n\n**Enterprise Solutions:**\n• Custom usage agreements\n• Volume discounts\n• Dedicated infrastructure for high-volume needs`,
      videoUrl: null,
      category: "Billing"
    },
    {
      question: "Do you offer refunds or trial periods?",
      answer: `Yes, we offer risk-free options:\n\n**Free Trial:**\n• 7-day full access trial\n• No credit card required\n• 100 free analyses included\n• Access to all features\n\n**Refund Policy:**\n• 30-day money-back guarantee\n• Pro-rated refunds for annual plans\n• No questions asked cancellation\n\n**Enterprise Trials:**\n• Extended 14-day trials\n• Custom proof-of-concept projects\n• Dedicated support during trial`,
      videoUrl: null,
      category: "Billing"
    },
    {
      question: "What kind of support do you provide?",
      answer: `Comprehensive support across all plans:\n\n**Starter Plan:**\n• Email support (24-48 hour response)\n• Knowledge base access\n• Community forum\n\n**Professional Plan:**\n• Priority email support (4-8 hour response)\n• Live chat during business hours\n• Video call support\n• Integration assistance\n\n**Enterprise Plan:**\n• Dedicated account manager\n• 24/7 phone support\n• Custom training sessions\n• SLA guarantees\n• Emergency escalation`,
      videoUrl: null,
      category: "Support"
    }
  ];

  const categories = ["All", "Accuracy", "Platform Support", "Performance", "Integration", "Security", "Billing", "Support"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="text-accent"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about Bear Witness AI's detection capabilities, 
            integration process, and platform support.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium smooth-transition ${
                selectedCategory === category
                  ? 'bg-accent text-white' :'bg-gray-100 text-muted-foreground hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl card-shadow overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 smooth-transition"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <span className="text-xs bg-gray-100 text-muted-foreground px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                  <Icon
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    color="#6b7280"
                  />
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <div className="prose prose-sm max-w-none">
                      {faq.answer.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground mb-3 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {faq.videoUrl && (
                      <div className="mt-6 bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Icon name="Play" size={16} color="var(--color-accent)" />
                          <span className="text-sm font-medium text-accent">
                            Watch Video Explanation
                          </span>
                        </div>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Icon name="Play" size={32} color="#6b7280" className="mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Video demonstration available
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className="text-center mt-12">
          <div className="bg-accent/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of Bear Witness AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 smooth-transition">
                <Icon name="MessageCircle" size={16} />
                <span>Live Chat</span>
              </button>
              <button className="inline-flex items-center space-x-2 border border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white smooth-transition">
                <Icon name="Mail" size={16} />
                <span>Email Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;