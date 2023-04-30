import { useEffect } from "react";
import Cookies from "js-cookie";
import i18n from "i18next";

export const useLanguageSelection = () => {
  useEffect(() => {
    const lang = Cookies.get("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    Cookies.set("lang", lang);
    i18n.changeLanguage(lang);
  };

  return handleLanguageChange;
};
