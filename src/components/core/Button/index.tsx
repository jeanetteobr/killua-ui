import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import { colors } from "@/tokens/colors";
import './Button.css';
import { useTheme } from "@/theme/useTheme";

// Helper to check if a color is light
function isLightColor(hex: string): boolean {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const r = parseInt(hex.substr(0,2), 16);
  const g = parseInt(hex.substr(2,2), 16);
  const b = parseInt(hex.substr(4,2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

export interface ButtonCustomProps extends ButtonProps {
  bgColor?: string; // Accepts a custom background color (hex)
}

const variantToColor = (theme: "dark" | "light") => ({
  primary: theme === "light" ? colors.light.primary : colors.primary,
  secondary: 'var(--color-secondary)', // Always use the CSS variable for gray
  ghost: 'transparent',
  danger: theme === "light" ? colors.light.danger : colors.danger,
  success: theme === "light" ? colors.light.success : colors.success,
  warning: theme === "light" ? colors.light.warning : colors.warning,
  info: theme === "light" ? colors.light.info : colors.info,
  link: theme === "light" ? colors.light.link : colors.link,
});

export const Button = forwardRef<HTMLButtonElement, ButtonCustomProps>(({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  className,
  bgColor,
  ...props
}, ref) => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme || "dark";
  const classes = [
    'kui-btn',
    `kui-btn--${variant}`,
    fullWidth ? 'kui-btn--fullWidth' : '',
    disabled ? 'kui-btn--disabled' : '',
    loading ? 'kui-btn--loading' : '',
    className || ''
  ].filter(Boolean).join(' ');

  // Resolve background color for variant if not provided
  const variantColors = variantToColor(theme);
  const resolvedBgColor = bgColor || variantColors[variant] || variantColors.primary;
  // For ghost, always use --text-primary for text color
  let textColor;
  if (variant === 'ghost') {
    textColor = 'var(--text-primary)';
  } else if (variant === 'link') {
    textColor = 'var(--color-link)';
  } else {
    textColor = isLightColor(resolvedBgColor)
      ? 'var(--text-on-light)'
      : 'var(--text-on-dark)';
  }
  const customStyle: React.CSSProperties = {
    '--kui-btn-text-color': textColor,
    '--kui-btn-bg-color': variant === 'link' ? 'transparent' : resolvedBgColor,
  } as React.CSSProperties;

  const getAccessibleName = () => {
    if (loading) return `${String(children)} (Loading...)`;
    return String(children);
  };

  return (
    <button
      ref={ref}
      role={variant === "link" ? "link" : "button"}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      aria-label={getAccessibleName()}
      disabled={disabled || loading}
      className={classes}
      style={customStyle}
      {...props}
    >
      {loading && (
        <>
          <span
            role="status"
            aria-hidden="true"
            className="kui-btn__spinner"
          />
          <span className="sr-only">Loading...</span>
        </>
      )}
      <span className={`kui-btn__content${loading ? ' kui-btn__content--hidden' : ''}`}>{children}</span>
    </button>
  );
});

Button.displayName = "Button";
