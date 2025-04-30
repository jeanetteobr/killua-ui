export * from '@/tokens/colors';
export * from '@/tokens/typography';
export * from '@/tokens/spacing';
export * from '@/tokens/elevation';
export * from '@/tokens/radii';
export * from '@/tokens/breakpoints';

import { ThemeProvider, useTheme } from "@/theme/useTheme";
import { ColorTokens } from '@/pages/ColorTokens'
import { CoreComponents } from '@/pages/CoreComponents'
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SystemIcon } from "@/components/icons/SystemIcon";

function ThemeToggle() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
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
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 8,
        borderRadius: "50%",
        transition: "background 0.2s",
        outline: "none",
      }}
    >
      {icon}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ColorTokens />
      <CoreComponents />
    </ThemeProvider>
  )
}

export default App
