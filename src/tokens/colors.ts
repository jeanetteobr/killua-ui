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
  focus: {
    ring: string;
  };
}

export interface Colors extends ColorTheme {
  light: ColorTheme;
}

export const colors: Colors = {
  // --- DEFAULT THEME (DARK MODE) ---
  primary: "#7C3AED",
  link: "#BFA3FF",
  info: "#64748B",
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

  focus: {
    ring: "#A855F7",
  },

  // --- LIGHT MODE OVERRIDES ---
  light: {
    primary: "#0369A1",
    link: "#3FC2E6",
    info: "#4A5D78",
    success: "#047857",
    warning: "#CA8A04",
    danger: "#BE185D",

    background: {
      base: "#F5F9FA",
      surface: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#475569",
      button: "#1E293B",
    },

    focus: {
      ring: "#0369A1",
    },
  },
}; 