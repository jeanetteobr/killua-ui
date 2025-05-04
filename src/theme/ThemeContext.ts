import { createContext } from "react";
import type { Theme } from "./types";

// eslint-disable-next-line no-unused-vars
export interface ThemeContextType {
// eslint-disable-next-line no-unused-vars
  theme: Theme;
  resolvedTheme: "dark" | "light";
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined); 