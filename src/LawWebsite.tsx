import React, { useState } from 'react';
import siteConfig from './config/siteConfig';

import Seo from './components/layout/Seo';
import NavBar from './components/layout/NavBar';

import ProfileSection from './components/sections/ProfileSection';
import HeroSection from './components/sections/HeroSection';
import WelcomeSection from './components/sections/WelcomeSection';
import PracticeSection from './components/sections/PracticeSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/layout/FooterSection';

import ContactForm from './components/ui/ContactForm';
import FloatingButtons from './components/ui/FloatingButtons';

import { useDynamicTitle } from './components/hooks/useDynamicTitle';
import { useScrollDetection } from './components/hooks/useScrollDetection';


// =================================================================
// MAIN COMPONENT 
// =================================================================
const LawWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const isScrolled = useScrollDetection(30);

  useDynamicTitle(siteConfig.siteName);

  return (
    <div className="min-h-screen bg-white">
      {/* Metadata */}
      <Seo title={siteConfig.siteName} />

      <NavBar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigation={siteConfig.navigation}
      />

      {/* Hero Section */}
      <HeroSection {...siteConfig.hero} />
      <WelcomeSection />
      <ProfileSection lawyer={siteConfig.lawyer} />
      <PracticeSection />
      <ContactSection />
      <FooterSection />
      <FloatingButtons actions={siteConfig.floatingActions ?? []} />

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
};

export default LawWebsite;