/**
 * Killua UI - A lightning-fast, modern React component library
 * 
 * @packageDocumentation
 */

// Components
export * from './components';

// Theme
export { ThemeProvider, useTheme } from './theme/useTheme';
export { ThemeContext } from './theme/ThemeContext';
export type { Theme } from './theme/types';
export type { ThemeContextType } from './theme/ThemeContext';

// Tokens
export { colors } from './tokens/colors';
export type { Colors, ColorVariant } from './tokens/colors';
export { typography } from './tokens/typography';
export { spacing } from './tokens/spacing';
export { elevation } from './tokens/elevation';
export { radii } from './tokens/radii';
export { breakpoints } from './tokens/breakpoints';

// Utilities
export { 
  isLightColor,
  getContrastRatio, 
  meetsWCAGAA, 
  meetsWCAGAAA, 
  testColorContrast 
} from './utils/colorContrast';
export type { ContrastResult } from './utils/colorContrast';
