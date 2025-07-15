import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import BenefitsGrid from './components/BenefitsGrid';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import TrialSignupSection from './components/TrialSignupSection';
import WhyStatsSection from './components/WhyStatsSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WhyStatsSection />
        {/* <InfoSection /> */}
        <BenefitsGrid />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <TrialSignupSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;