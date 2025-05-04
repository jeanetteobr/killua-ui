import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./types";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      return savedTheme || 'system';
    }
    return 'system';
  });
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const getSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    if (theme === "system") {
      setResolvedTheme(getSystemTheme());
      const listener = (e: MediaQueryListEvent) => {
        setResolvedTheme(e.matches ? "dark" : "light");
      };
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener("change", listener);
      return () => mql.removeEventListener("change", listener);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("light-theme", resolvedTheme === "light");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme((t: Theme) => (t === "dark" ? "light" : t === "light" ? "system" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
} 