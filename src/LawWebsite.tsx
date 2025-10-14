import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import siteConfig from './config/siteConfig';

import Seo from './components/layout/Seo';
import NavBar from './components/layout/NavBar';

import ProfileSection from './components/sections/ProfileSection';
import HeroSection from './components/sections/HeroSection';
import WelcomeSection from './components/sections/WelcomeSection';
import PracticeSection from './components/sections/PracticeSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';

import ContactForm from './components/ui/ContactForm';
import FloatingButtons from './components/ui/FloatingButtons';

import { useDynamicTitle } from './components/hooks/useDynamicTitle';


// =================================================================
// MAIN COMPONENT 
// =================================================================
const LawWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useDynamicTitle(siteConfig.siteName);

  // FIX: Parameter 'href' explicitly typed as string
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Metadata */}
      <Seo title={siteConfig.siteName} />

      <NavBar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigation={siteConfig.navigation}
        scrollToSection={scrollToSection}
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