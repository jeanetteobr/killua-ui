/**
 * Color tokens for Killua UI
 * 
 * IMPORTANT: These values should match the CSS variables in src/styles/global.css
 * The CSS variables are the canonical source of truth for runtime styling.
 * This file provides TypeScript access to the same values for programmatic use.
 */

export type ColorVariant = 'primary' | 'secondary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

interface ColorTheme {
  primary: string;
  secondary: string;
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
    onSolid: string;
    onLight: string;
    onDark: string;
  };
}

export interface Colors extends ColorTheme {
  light: ColorTheme;
}

export const colors: Colors = {
  // --- DEFAULT THEME (DARK MODE) ---
  // Synced with :root in global.css
  primary: "#7C3AED",
  secondary: "#64748B",
  link: "#BFA3FF",
  info: "#06B6D4",
  success: "#4ADE80",
  warning: "#FACC15",
  danger: "#FF4E9B",

  background: {
    base: "#100418",
    surface: "#1B0E2A",
  },

  text: {
    primary: "#FFFFFF",
    secondary: "#E0D7FF",
    onSolid: "#FFFFFF",
    onLight: "#0F172A",
    onDark: "#FFFFFF",
  },

  // --- LIGHT MODE OVERRIDES ---
  // Synced with .light-theme in global.css
  light: {
    primary: "#06B6D4",
    secondary: "#4A5D78",
    link: "#3FC2E6",
    info: "#67E8F9",
    success: "#22C55E",
    warning: "#EAB308",
    danger: "#BE185D",

    background: {
      base: "#F5F9FA",
      surface: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#475569",
      onSolid: "#FFFFFF",
      onLight: "#0F172A",
      onDark: "#FFFFFF",
    },
  }
}; 