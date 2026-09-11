import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(LanguageDetector) // Detect language based on browser or user preference
  .use(HttpBackend) // Use backend to load translation files
  .use(initReactI18next) // Integrates i18next with React
  .init({
    fallbackLng: "en", // Default language if no match is found
    debug: true, // Enable debugging to view details in the console
    interpolation: {
      escapeValue: false, // React already escapes HTML tags
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    ns: ["common"], // Define namespaces (files for each page)
    defaultNS: "common", // Default namespace
  });

export default i18n;
