import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEl from "../locales/el/translations.json";
import translationsEn from "../locales/en/translations.json";

const resources = {
  en: {
    translation: translationsEn,
  },
  el: {
    translation: translationsEl,
  },
};

i18next.use(initReactI18next).init({
  resources,
  debug: false,
  fallbackLng: "en",
  saveMissing: true,
});

export default i18next;
