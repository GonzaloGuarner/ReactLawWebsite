import React from 'react';
import type { HeroProps } from '../../types/types';
import { useNavigateByHref } from '../hooks/useNavigateByHref';

const HeroSection: React.FC<HeroProps> = ({
  title,
  tagline,
  ctaText,
  ctaHref,
  backgroundImage,
}) => {
  const navigateByHref = useNavigateByHref();

  return (
    <section
      className="relative bg-cover bg-center pt-32 pb-40"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">{title}</h1>
        <p className="text-xl mb-8 font-sans">{tagline}</p>

        {ctaText && ctaHref && (
          <button
            type="button"
            onClick={() => navigateByHref(ctaHref)}
            className="font-sans bg-primary hover:bg-primary_focus px-6 py-3 rounded-md font-semibold transition"
          >
            {ctaText}
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
