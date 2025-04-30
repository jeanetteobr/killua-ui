import { colors, ColorVariant } from '../tokens/colors';
import { testColorContrast } from './colorContrast';
import tinycolor from 'tinycolor2';

function getDynamicTextColor(bg: string): string {
  if (bg === 'transparent') return colors.text.primary;
  return tinycolor(bg).isLight() ? '#0F172A' : '#FFFFFF';
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

  describe('Focus Rings', () => {
    describe('Dark Mode', () => {
      test('Focus ring on base background meets WCAG AA', () => {
        const result = testColorContrast(colors.focus.ring, colors.background.base);
        expect(result.meetsAA).toBe(true);
      });

      test('Focus ring on surface background meets WCAG AA', () => {
        const result = testColorContrast(colors.focus.ring, colors.background.surface);
        expect(result.meetsAA).toBe(true);
      });
    });

    describe('Light Mode', () => {
      test('Focus ring on base background meets WCAG AA', () => {
        const result = testColorContrast(colors.light.focus.ring, colors.light.background.base);
        expect(result.meetsAA).toBe(true);
      });

      test('Focus ring on surface background meets WCAG AA', () => {
        const result = testColorContrast(colors.light.focus.ring, colors.light.background.surface);
        expect(result.meetsAA).toBe(true);
      });
    });
  });
}); 