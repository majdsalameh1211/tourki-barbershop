import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Import the data
import { translationResources, languages } from './data/mockData';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translationResources, // Use the translations from mockData
    fallbackLng: 'en',
    supportedLngs: languages.map(l => l.code), // Dynamically get supported codes
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;