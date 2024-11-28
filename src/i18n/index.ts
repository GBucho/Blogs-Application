import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";
import translatedAboutPageKA from "./ka/about.json";
import translatedAboutPageEN from "./en/about.json";

import translatedWritePageKA from "./ka/write.json";
import translatedWritePageEN from "./en/write.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ka: {
        translation: {
          "about-page": translatedAboutPageKA,
          "write-page": translatedWritePageKA,
        },
      },
      en: {
        translation: {
          "about-page": translatedAboutPageEN,
          "write-page": translatedWritePageEN,
        },
      },
    },
    lng: "ka",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
