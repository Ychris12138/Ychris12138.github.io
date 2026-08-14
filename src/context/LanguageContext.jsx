import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content } from "../data/content.js";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  const saved = window.localStorage.getItem("homepage-language");
  if (saved === "zh" || saved === "en") return saved;
  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "zh" ? "en" : "zh")),
      t: content[language],
    }),
    [language]
  );

  useEffect(() => {
    const current = content[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = current.seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", current.seo.description);
    window.localStorage.setItem("homepage-language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
