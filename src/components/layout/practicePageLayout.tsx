// src/components/layout/PracticePageLayout.tsx
import React, { useState } from 'react';
import NavBar from './NavBar';
import FooterSection from './FooterSection';
import { SectionContainer } from './SectionContainer';
import { SeparatorBar } from '../ui/SeparatorBar';
import { useScrollDetection } from '../hooks/useScrollDetection';
import { useSiteConfig } from '../../config/useSiteConfig';

interface Card {
  title: string;
  body: string;
}

interface PracticePageLayoutProps {
  title: string;
  intro: string;
  cards: Card[];
}

const PracticePageLayout: React.FC<PracticePageLayoutProps> = ({ title, intro, cards }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollDetection(30);
  const siteConfig = useSiteConfig();

  return (
    <div className="flex flex-col min-h-screen bg-page_white text-gray-800">
      <NavBar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigation={siteConfig.navigation}
      />

      <main className="flex-grow pt-36 pb-20">
        <SectionContainer className="text-center mb-12">
          <h1 className="text-4xl font-sans font-bold text-primary mb-2">
            {title}
          </h1>
          <SeparatorBar />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {intro}
          </p>
        </SectionContainer>

        <SectionContainer className="grid md:grid-cols-2 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
              <h2 className="text-2xl font-sans font-semibold text-primary mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </SectionContainer>
      </main>

      <FooterSection />
    </div>
  );
};

export default PracticePageLayout;