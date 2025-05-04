import { colors, ColorVariant } from '../tokens/colors';
import { testColorContrast } from './colorContrast';

// Helper to check if a color is light
function isLightColor(hex: string): boolean {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  const r = parseInt(hex.substr(0,2), 16);
  const g = parseInt(hex.substr(2,2), 16);
  const b = parseInt(hex.substr(4,2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

function getDynamicTextColor(bg: string): string {
  if (bg === 'transparent') return colors.text.primary;
  return isLightColor(bg) ? '#0F172A' : '#FFFFFF';
}

describe('Color Contrast Tests', () => {
  describe('Text on Background Combinations', () => {
    describe('Dark Mode', () => {
      test('Primary text on base background meets WCAG AA', () => {
        const result = testColorContrast(colors.text.primary, colors.background.base);
        expect(result.meetsAA).toBe(true);
      });

      test('Secondary text on base background meets WCAG AA', () => {
        const result = testColorContrast(colors.text.secondary, colors.background.base);
        expect(result.meetsAA).toBe(true);
      });

      test('Primary text on surface background meets WCAG AA', () => {
        const result = testColorContrast(colors.text.primary, colors.background.surface);
        expect(result.meetsAA).toBe(true);
      });

      test('Secondary text on surface background meets WCAG AA', () => {
        const result = testColorContrast(colors.text.secondary, colors.background.surface);
        expect(result.meetsAA).toBe(true);
      });
    });

    describe('Light Mode', () => {
      test('Primary text on base background meets WCAG AA', () => {
        const result = testColorContrast(colors.light.text.primary, colors.light.background.base);
        expect(result.meetsAA).toBe(true);
      });

      test('Secondary text on base background meets WCAG AA', () => {
        const result = testColorContrast(colors.light.text.secondary, colors.light.background.base);
        expect(result.meetsAA).toBe(true);
      });

      test('Primary text on surface background meets WCAG AA', () => {
        const result = testColorContrast(colors.light.text.primary, colors.light.background.surface);
        expect(result.meetsAA).toBe(true);
      });

      test('Secondary text on surface background meets WCAG AA', () => {
        const result = testColorContrast(colors.light.text.secondary, colors.light.background.surface);
        expect(result.meetsAA).toBe(true);
      });
    });
  });

  describe('Button Text on Button Background', () => {
    const buttonVariants: ColorVariant[] = ['primary', 'info', 'success', 'warning', 'danger'];

    describe('Dark Mode', () => {
      buttonVariants.forEach(variant => {
        test(`${variant} button text meets WCAG AA`, () => {
          const bg = colors[variant];
          const textColor = getDynamicTextColor(bg);
          const result = testColorContrast(textColor, bg);
          expect(result.meetsAA).toBe(true);
        });
      });
    });

    describe('Light Mode', () => {
      buttonVariants.forEach(variant => {
        test(`${variant} button text meets WCAG AA`, () => {
          const bg = colors.light[variant];
          const textColor = getDynamicTextColor(bg);
          const result = testColorContrast(textColor, bg);
          expect(result.meetsAA).toBe(true);
        });
      });
    });
  });

  // Focus Rings tests removed because focus.ring is no longer present in color tokens
}); 