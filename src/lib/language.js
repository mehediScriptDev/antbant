"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("bn");

  useEffect(() => {
    const saved = localStorage.getItem("sahosh-lang");
    if (saved && (saved === "en" || saved === "bn")) {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "bn" : "en";
    setLang(next);
    localStorage.setItem("sahosh-lang", next);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
