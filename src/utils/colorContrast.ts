/**
 * Normalizes a hex color to 6-character format (without #)
 * @param hex - The hex color string (e.g. "#FF0000" or "#F00")
 * @returns The normalized 6-character hex string without #
 */
const normalizeHex = (hex: string): string => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  return hex;
};

/**
 * Converts a hex color to RGB
 * @param hex - The hex color string (e.g. "#FF0000" or "#F00")
 * @returns An object with r, g, b values
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const normalized = normalizeHex(hex);
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalized);
  if (!result) throw new Error('Invalid hex color');
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

/**
 * Determines if a color is perceptually light (for choosing contrasting text)
 * Uses the YIQ formula for perceived brightness
 * @param hex - The hex color string (e.g. "#FF0000" or "#F00")
 * @returns True if the color is light, false if dark
 */
export const isLightColor = (hex: string): boolean => {
  const normalized = normalizeHex(hex);
  const r = parseInt(normalized.substring(0, 2), 16);
  const g = parseInt(normalized.substring(2, 4), 16);
  const b = parseInt(normalized.substring(4, 6), 16);
  // YIQ formula for perceived brightness
  // Threshold raised to 150 to ensure darker teals use white text
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

/**
 * Calculates the relative luminance of a color
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns The relative luminance (0-1)
 */
const getRelativeLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

/**
 * Calculates the contrast ratio between two colors
 * @param color1 - First color in hex format
 * @param color2 - Second color in hex format
 * @returns The contrast ratio
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const l1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Checks if a contrast ratio meets WCAG 2.1 AA standards
 * @param ratio - The contrast ratio to check
 * @param isLargeText - Whether the text is large (18pt or 14pt bold)
 * @returns Whether the ratio meets WCAG 2.1 AA standards
 */
export const meetsWCAGAA = (ratio: number, isLargeText: boolean = false): boolean => {
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
};

/**
 * Checks if a contrast ratio meets WCAG 2.1 AAA standards
 * @param ratio - The contrast ratio to check
 * @param isLargeText - Whether the text is large (18pt or 14pt bold)
 * @returns Whether the ratio meets WCAG 2.1 AAA standards
 */
export const meetsWCAGAAA = (ratio: number, isLargeText: boolean = false): boolean => {
  return isLargeText ? ratio >= 4.5 : ratio >= 7;
};

export interface ContrastResult {
  ratio: number;
  meetsAA: boolean;
  meetsAAA: boolean;
  foreground: string;
  background: string;
}

/**
 * Tests a color combination and returns detailed results
 * @param foreground - Foreground color in hex format
 * @param background - Background color in hex format
 * @param isLargeText - Whether the text is large (18pt or 14pt bold)
 * @returns An object with contrast ratio and WCAG compliance information
 */
export const testColorContrast = (
  foreground: string,
  background: string,
  isLargeText: boolean = false
): ContrastResult => {
  const ratio = getContrastRatio(foreground, background);
  return {
    ratio: Number(ratio.toFixed(2)),
    meetsAA: meetsWCAGAA(ratio, isLargeText),
    meetsAAA: meetsWCAGAAA(ratio, isLargeText),
    foreground,
    background,
  };
}; 