import React, { useState } from "react";
import { ThemeContext } from "@/theme/ThemeContext";
import "./Example.css";

interface ExampleProps {
  /** Title for this example section */
  title?: string;
  /** Description of what the example demonstrates */
  description?: string;
  /** The code snippet to display */
  code?: string;
  /** Whether to show in both light and dark modes */
  showModes?: boolean;
  /** The live component example */
  children: React.ReactNode;
}

// Fixed theme provider that overrides the global theme context
const FixedThemeProvider: React.FC<{
  theme: "dark" | "light";
  children: React.ReactNode;
}> = ({ theme, children }) => {
  // Provide a fixed theme context that ignores the global theme
  const fixedContext = {
    theme: theme,
    resolvedTheme: theme,
    setTheme: () => {},
    toggleTheme: () => {},
  };
  
  return (
    <ThemeContext.Provider value={fixedContext}>
      {children}
    </ThemeContext.Provider>
  );
};

// Dark theme CSS variables - inline styles for highest specificity
const darkThemeVars: React.CSSProperties = {
  // @ts-expect-error CSS custom properties
  "--background-base": "#100418",
  "--background-surface": "#1B0E2A",
  "--color-primary": "#7C3AED",
  "--color-link": "#BFA3FF",
  "--color-info": "#06B6D4",
  "--color-success": "#4ADE80",
  "--color-warning": "#FACC15",
  "--color-danger": "#FF4E9B",
  "--color-secondary": "#64748B",
  "--text-primary": "#FFFFFF",
  "--text-secondary": "#E0D7FF",
};

// Light theme CSS variables - inline styles for highest specificity
const lightThemeVars: React.CSSProperties = {
  // @ts-expect-error CSS custom properties
  "--background-base": "#F5F9FA",
  "--background-surface": "#FFFFFF",
  "--color-primary": "#06B6D4",
  "--color-link": "#3FC2E6",
  "--color-info": "#67E8F9",
  "--color-success": "#22C55E",
  "--color-warning": "#CA8A04",
  "--color-danger": "#BE185D",
  "--color-secondary": "#4A5D78",
  "--text-primary": "#0F172A",
  "--text-secondary": "#475569",
};

export const Example: React.FC<ExampleProps> = ({
  title,
  description,
  code,
  showModes = false,
  children,
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="docs-example">
      {title && <h3 className="docs-example__title">{title}</h3>}
      {description && <p className="docs-example__description">{description}</p>}
      
      {showModes ? (
        <div className="docs-example__modes">
          <div 
            className="docs-example__preview docs-example__preview--dark"
            style={darkThemeVars}
          >
            <span className="docs-example__mode-label">Dark</span>
            <FixedThemeProvider theme="dark">
              {children}
            </FixedThemeProvider>
          </div>
          <div 
            className="docs-example__preview docs-example__preview--light"
            style={lightThemeVars}
          >
            <span className="docs-example__mode-label">Light</span>
            <FixedThemeProvider theme="light">
              {children}
            </FixedThemeProvider>
          </div>
        </div>
      ) : (
        <div className="docs-example__preview">
          {children}
        </div>
      )}
      
      {code && (
        <>
          <button
            className="docs-example__toggle"
            onClick={() => setShowCode(!showCode)}
            aria-expanded={showCode}
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
          
          {showCode && (
            <pre className="docs-example__code">
              <code>{code}</code>
            </pre>
          )}
        </>
      )}
    </div>
  );
};
