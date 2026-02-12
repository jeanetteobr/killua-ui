import { useTheme } from "@/theme";
import { SunIcon, MoonIcon, SystemIcon } from "@/components/icons";
import "./ThemeToggle.css";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  let icon = <MoonIcon />;
  if (theme === "system") icon = <SystemIcon />;
  else if (theme === "light") icon = <SunIcon />;
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch theme (current: ${theme})`}
      className="theme-toggle"
    >
      {icon}
    </button>
  );
};
