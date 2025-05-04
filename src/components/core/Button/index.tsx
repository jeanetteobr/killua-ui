import React, { forwardRef } from "react";
import { ButtonProps, ButtonVariant } from "./Button.types";
import './Button.css';

const variantBgColors: Record<ButtonVariant, string> = {
  primary: "var(--color-primary)",
  secondary: "var(--color-info)",
  ghost: "transparent",
  danger: "var(--color-danger)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  info: "var(--color-info)",
  link: "transparent",
};

const variantStyles = {
  primary: {
    backgroundColor: "var(--color-primary)",
    border: "none",
  },
  secondary: {
    backgroundColor: "var(--color-secondary)",
    color: "#FFFFFF",
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--text-primary)",
    border: "none",
  },
  danger: {
    backgroundColor: "var(--color-danger)",
    border: "none",
  },
  success: {
    backgroundColor: "var(--color-success)",
    border: "none",
  },
  warning: {
    backgroundColor: "var(--color-warning)",
    border: "none",
  },
  info: {
    backgroundColor: "var(--color-info)",
    border: "none",
  },
  link: {
    backgroundColor: "transparent",
    color: "var(--color-link)",
    textDecoration: "underline",
    fontWeight: "var(--font-weight-medium)",
    border: "none",
  },
};

// Helper to get the computed color value from CSS variable
function getCssVarValue(varName: string): string {
  if (typeof window === "undefined") return "#000";
  return getComputedStyle(document.documentElement).getPropertyValue(varName.replace('var(', '').replace(')', '')).trim() || "#000";
}

// Helper to check if a color is light
function isLightColor(hex: string): boolean {
  // Remove hash if present
  hex = hex.replace('#', '');
  // Convert 3-digit hex to 6-digit
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  const r = parseInt(hex.substr(0,2), 16);
  const g = parseInt(hex.substr(2,2), 16);
  const b = parseInt(hex.substr(4,2), 16);
  // Perceived brightness formula
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

function getDynamicTextColor(bg: string): string {
  // If transparent, use primary text color
  if (bg === "transparent") return "var(--text-primary)";
  // If CSS var, resolve it
  let color = bg;
  if (bg.startsWith("var(")) {
    color = getCssVarValue(bg);
  }
  return isLightColor(color) ? "#0F172A" : "#FFFFFF";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  className,
  ...props
}, ref) => {
  // Compute class names
  const classes = [
    'kui-btn',
    `kui-btn--${variant}`,
    fullWidth ? 'kui-btn--fullWidth' : '',
    disabled ? 'kui-btn--disabled' : '',
    loading ? 'kui-btn--loading' : '',
    className || ''
  ].filter(Boolean).join(' ');

  // Compute dynamic text color for solid variants
  let textColor: string | undefined = undefined;
  if (variant !== "ghost" && variant !== "link" && variant !== "secondary") {
    textColor = getDynamicTextColor(variantBgColors[variant]);
  }
  if (variant === "secondary") {
    textColor = "#FFFFFF";
  }

  // Get the button's accessible name
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
