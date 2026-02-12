import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, useTheme } from './useTheme';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock matchMedia
const mockMatchMedia = (matches: boolean) => {
  const listeners: ((e: MediaQueryListEvent) => void)[] = [];
  return jest.fn().mockImplementation(() => ({
    matches,
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addEventListener: jest.fn((_, listener) => listeners.push(listener)),
    removeEventListener: jest.fn((_, listener) => {
      const idx = listeners.indexOf(listener);
      if (idx > -1) listeners.splice(idx, 1);
    }),
    dispatchEvent: jest.fn(),
    // Expose for testing
    _listeners: listeners,
    _triggerChange: (newMatches: boolean) => {
      listeners.forEach(l => l({ matches: newMatches } as MediaQueryListEvent));
    },
  }));
};

// Test component that uses the hook
function TestConsumer() {
  const { theme, resolvedTheme, toggleTheme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('system')}>Set System</button>
    </div>
  );
}

describe('ThemeProvider and useTheme', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
    document.body.classList.remove('light-theme');
    window.matchMedia = mockMatchMedia(true); // Default to dark system preference
  });

  it('provides default theme as system', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('system');
  });

  it('resolves system theme to dark when system prefers dark', () => {
    window.matchMedia = mockMatchMedia(true);
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('resolved')).toHaveTextContent('dark');
  });

  it('resolves system theme to light when system prefers light', () => {
    window.matchMedia = mockMatchMedia(false);
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('resolved')).toHaveTextContent('light');
  });

  it('toggles theme from dark to light to system', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    const toggleBtn = screen.getByText('Toggle');
    
    // Start at system, toggle to dark
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    
    // Toggle to light
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    
    // Toggle back to system
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('theme')).toHaveTextContent('system');
  });

  it('setTheme updates the theme', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    fireEvent.click(screen.getByText('Set Light'));
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('resolved')).toHaveTextContent('light');
    
    fireEvent.click(screen.getByText('Set Dark'));
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('resolved')).toHaveTextContent('dark');
  });

  it('persists theme to localStorage', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    fireEvent.click(screen.getByText('Set Dark'));
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('loads theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce('light');
    
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('adds light-theme class to body when resolved theme is light', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    await act(async () => {
      fireEvent.click(screen.getByText('Set Light'));
    });
    
    expect(document.body.classList.contains('light-theme')).toBe(true);
  });

  it('removes light-theme class from body when resolved theme is dark', async () => {
    document.body.classList.add('light-theme');
    
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    
    await act(async () => {
      fireEvent.click(screen.getByText('Set Dark'));
    });
    
    expect(document.body.classList.contains('light-theme')).toBe(false);
  });

  it('throws error when useTheme is used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => render(<TestConsumer />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
    
    consoleSpy.mockRestore();
  });
});
