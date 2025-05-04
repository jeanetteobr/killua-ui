import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './index';
import { ThemeProvider } from '@/theme/useTheme';

// Mock window.matchMedia for jsdom environment
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

// Helper to render with theme (future: mock localStorage or context for theme)
function renderWithTheme(ui: React.ReactElement) {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
}

describe('Button', () => {
  it('renders with children', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as disabled', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders loading state with spinner and aria-busy', () => {
    renderWithTheme(<Button loading>Loading</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    const loadingTexts = screen.getAllByText(/loading/i);
    expect(loadingTexts).toHaveLength(2);
  });

  it('applies fullWidth class', () => {
    renderWithTheme(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('kui-btn--fullWidth');
  });

  it('applies custom className', () => {
    renderWithTheme(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it.each([
    'primary', 'secondary', 'ghost', 'danger', 'success', 'warning', 'info', 'link',
  ] as const)('renders correct variant class for %s', (variant) => {
    renderWithTheme(<Button variant={variant}>{variant}</Button>);
    const role = variant === 'link' ? 'link' : 'button';
    const btn = screen.getByRole(role, { name: variant });
    expect(btn).toHaveClass(`kui-btn--${variant}`);
  });

  it('renders with light and dark themes', () => {
    renderWithTheme(<Button>Dark</Button>);
    renderWithTheme(<Button>Light</Button>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.some(btn => btn.textContent === 'Dark')).toBe(true);
    expect(buttons.some(btn => btn.textContent === 'Light')).toBe(true);
  });

  it('is focusable and accessible by keyboard', () => {
    renderWithTheme(<Button>Focusable</Button>);
    const btn = screen.getByRole('button');
    btn.focus();
    expect(btn).toHaveFocus();
  });

  it('renders as a link role for link variant', () => {
    renderWithTheme(<Button variant="link">Link</Button>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('has accessible name reflecting loading state', () => {
    renderWithTheme(<Button loading>Save</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Save (Loading...)');
  });
}); 