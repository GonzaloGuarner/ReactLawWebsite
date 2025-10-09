// components/ui/HeroSection.tsx
import React from 'react';

interface HeroProps {
  title: string;
  tagline: string;
  ctaText: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroProps> = ({ title, tagline, ctaText, backgroundImage }) => (
  <section
    className="relative bg-cover bg-center pt-32 pb-40"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-serif mb-6">{title}</h1>
      <p className="text-xl mb-8 font-serif">{tagline}</p>
      <button className="font-serif bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold transition">
        {ctaText}
      </button>
    </div>
  </section>
);

export default HeroSection;
