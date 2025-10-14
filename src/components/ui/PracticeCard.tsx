import React from 'react';
import type { PracticeCardProps } from '../../types/types';

export const PracticeCard: React.FC<PracticeCardProps> = ({ practice, index }) => (
  <div
    className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300   `}
  >
    <img
      src={practice.image}
      alt={practice.title}
      loading="lazy"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
      <p className="text-sm opacity-90 mb-2">{practice.description}</p>
      <button className="mt-3 text-white border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-gray-800 transition-colors">
        Ir a sección →
      </button>
    </div>
  </div>
);
export default React.memo(PracticeCard);
