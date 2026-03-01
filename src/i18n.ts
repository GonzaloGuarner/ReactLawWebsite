import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import esTranslation from './locales/es/translation.json';
import enTranslation from './locales/en/translation.json';
import caTranslation from './locales/ca/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslation },
      en: { translation: enTranslation },
      ca: { translation: caTranslation },
    },
    fallbackLng: 'es',
    // LanguageDetector will read from localStorage key 'i18nextLng' by default,
    // so language preference is automatically persisted across sessions.
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;