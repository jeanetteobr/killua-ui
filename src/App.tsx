import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/theme/useTheme";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SystemIcon } from "@/components/icons/SystemIcon";

// Docs
import { DocsLayout } from "@/docs/layouts";
import { 
  GettingStarted, 
  ButtonDocs, 
  HeadingDocs, 
  ComingSoon 
} from "@/docs/pages";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  let icon = <MoonIcon />;
  if (theme === "system") icon = <SystemIcon />;
  else if (theme === "light") icon = <SunIcon />;
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch theme (current: ${theme})`}
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        background: "var(--background-surface)",
        border: "1px solid color-mix(in srgb, var(--text-secondary) 30%, transparent)",
        cursor: "pointer",
        padding: 8,
        borderRadius: "50%",
        transition: "background 0.2s",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ThemeToggle />
        <Routes>
          {/* Redirect root to docs */}
          <Route path="/" element={<Navigate to="/docs" replace />} />
          
          {/* Docs routes */}
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<GettingStarted />} />
            
            {/* Component docs */}
            <Route path="components/button" element={<ButtonDocs />} />
            <Route path="components/heading" element={<HeadingDocs />} />
            
            {/* Coming soon pages for components not yet documented */}
            <Route path="components/:component" element={<ComingSoon />} />
            <Route path="tokens" element={<ComingSoon />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
