import React from 'react';
import { useTranslation } from 'react-i18next';
import PracticePageLayout from '../layout/practicePageLayout';

const DerechoAlimentarioPage: React.FC = () => {
  const { t } = useTranslation();
  const raw = t('derechoAlimentario.cards', { returnObjects: true });
  const cards = Array.isArray(raw) ? raw as { title: string; body: string }[] : [];

  return (
    <PracticePageLayout
      title={t('derechoAlimentario.title')}
      intro={t('derechoAlimentario.intro')}
      cards={cards}
    />
  );
};

export default DerechoAlimentarioPage;