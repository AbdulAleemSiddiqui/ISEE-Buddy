import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, isRTL } from "@/lib/i18n";

type Theme = "light" | "dark" | "system";

interface SettingsContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  language: Language;
  setLanguage: (l: Language) => void;
}

const SettingsContext = createContext<SettingsContextType | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem("isee-theme") as Theme) || "light";
  });
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem("isee-lang") as Language) || "it";
  });

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("isee-theme", t);
  };

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    localStorage.setItem("isee-lang", l);
  };

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Apply RTL
  useEffect(() => {
    const rtl = isRTL(language);
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [language]);

  return (
    <SettingsContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be inside SettingsProvider");
  return ctx;
}
