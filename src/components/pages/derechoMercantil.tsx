import React from 'react';
import { useTranslation } from 'react-i18next';
import PracticePageLayout from '../layout/practicePageLayout';

const DerechoMercantilPage: React.FC = () => {
  const { t } = useTranslation();
  const raw = t('derechoMercantil.cards', { returnObjects: true });
  const cards = Array.isArray(raw) ? raw as { title: string; body: string }[] : [];

  return (
    <PracticePageLayout
      title={t('derechoMercantil.title')}
      intro={t('derechoMercantil.intro')}
      cards={cards}
    />
  );
};

export default DerechoMercantilPage;