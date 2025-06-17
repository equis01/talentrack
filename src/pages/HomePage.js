import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeFeatures from '../components/HomeFeatures';
import HomeHowItWorks from '../components/HomeHowItWorks';
import HomeCallToAction from '../components/HomeCallToAction';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero setCurrentPage={setCurrentPage} />
      <HomeFeatures />
      <HomeHowItWorks />
      <PricingSection setCurrentPage={setCurrentPage} />
      <HomeCallToAction setCurrentPage={setCurrentPage} />
      <ContactSection />
    </div>
  );
};

export default HomePage;

// DONE