import React, { useState } from 'react';
import { useSiteConfig } from '../../config/useSiteConfig';

import Seo from '../layout/Seo';
import NavBar from '../layout/NavBar';

import ProfileSection from '../sections/ProfileSection';
import HeroSection from '../sections/HeroSection';
import WelcomeSection from '../sections/WelcomeSection';
import PracticeSection from '../sections/PracticeSection';
import ContactSection from '../sections/ContactSection';
import FooterSection from '../layout/FooterSection';

import ContactForm from '../ui/ContactForm';
import FloatingButtons from '../ui/FloatingButtons';

import { useDynamicTitle } from '../hooks/useDynamicTitle';
import { useScrollDetection } from '../hooks/useScrollDetection';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const isScrolled = useScrollDetection(30);
  const siteConfig = useSiteConfig();

  useDynamicTitle(siteConfig.siteName);

  return (
    <div className="min-h-screen bg-white">
      <Seo title={siteConfig.siteName} />

      <NavBar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigation={siteConfig.navigation}
      />

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

export default HomePage;