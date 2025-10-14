import React from 'react';
import PracticeCard from '../ui/PracticeCard';
import siteConfig from '../../config/siteConfig';

const PracticeSection: React.FC = () => {
  return (
    <section id="practices" data-title="Practice Areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.practiceAreas.map((practice, index) => (
            <PracticeCard key={index} practice={practice} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
