import React from 'react';
import { useTranslation } from 'react-i18next';

const WelcomeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          {t('welcome.description')}
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;