import React from 'react';
import { useTranslation } from 'react-i18next';
import type { PracticeCardProps } from '../../types/types';
import { useNavHandler } from '../hooks/useNavHandler';

export const PracticeCard: React.FC<PracticeCardProps> = ({ practice }) => {
  const { t } = useTranslation();
  const handleClick = useNavHandler();

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={practice.image}
        alt={practice.title}
        loading="lazy"
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

      {/* Text block anchored to top */}
      <div className="absolute top-0 left-0 right-0 p-6 text-white flex flex-col justify-start h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
          <p className="text-sm opacity-90">{practice.description}</p>
        </div>

        <button
          onClick={() => handleClick(practice.href)}
          className="mt-4 text-white border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-gray-800 transition-colors self-start"
        >
          {t('practices.goToSection')}
        </button>
      </div>
    </div>
  );
};

export default React.memo(PracticeCard);