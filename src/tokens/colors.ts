export type ColorVariant = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

interface ColorTheme {
  primary: string;
  link: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
  background: {
    base: string;
    surface: string;
  };
  text: {
    primary: string;
    secondary: string;
    button: string;
  };

}

export interface Colors extends ColorTheme {
  light: ColorTheme;
}

export const colors: Colors = {
  // --- DEFAULT THEME (DARK MODE) ---
  primary: "#7C3AED",
  link: "#BFA3FF",
  info: "#06B6D4", // Vibrant cyan for dark mode
  success: "#10B981",
  warning: "#EAB308",
  danger: "#DB2777",

  background: {
    base: "#100418",
    surface: "#1B0E2A",
  },

  text: {
    primary: "#FFFFFF",
    secondary: "#E0D7FF",
    button: "#1E293B",
  },


  // --- LIGHT MODE OVERRIDES ---
  light: {
    primary: "#06B6D4", // Vibrant cyan
    info: "#67E8F9",    // Icy cyan
    link: "#3FC2E6",    // Bright cyan
    success: "#22C55E",
    warning: "#FBBF24",
    danger: "#BE185D",
  
    background: {
      base: "#F0F9FF",
      surface: "#FFFFFF",
    },
  
    text: {
      primary: "#0F172A",
      secondary: "#4A5D78",
      button: "#FFFFFF",
    },
  }
}; 