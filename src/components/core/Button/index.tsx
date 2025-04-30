import React, { forwardRef } from "react";
import { ButtonProps, ButtonVariant } from "./Button.types";

const variantStyles = {
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--text-on-solid)",
    border: "none",
  },
  secondary: {
    backgroundColor: "var(--color-info)",
    color: "var(--text-on-solid)",
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--text-primary)",
    border: "none",
  },
  danger: {
    backgroundColor: "var(--color-danger)",
    color: "var(--text-on-solid)",
    border: "none",
  },
  success: {
    backgroundColor: "var(--color-success)",
    color: "var(--text-on-solid)",
    border: "none",
  },
  warning: {
    backgroundColor: "var(--color-warning)",
    color: "var(--text-on-solid)",
    border: "none",
  },
  info: {
    backgroundColor: "var(--color-info)",
    color: "var(--text-on-solid)",
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

// Map variants to their respective focus ring colors
const focusRingColors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-info)",
  ghost: "var(--text-primary)",
  danger: "var(--color-danger)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  info: "var(--color-info)",
  link: "var(--color-link)",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  className,
  ...props
}, ref) => {
  const baseStyles: React.CSSProperties = {
    ...variantStyles[variant],
    padding: "var(--spacing-sm) var(--spacing-md)",
    borderRadius: "var(--radius-md)",
    fontSize: "var(--font-size-sm)",
    fontWeight: 500,
    boxShadow: "var(--elevation-sm)",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled || loading ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--spacing-xs)",
    position: "relative",
    outline: "none",
  };

  const getFocusRingStyles = (variant: ButtonVariant) => ({
    boxShadow: `var(--elevation-sm), 0 0 0 4px color-mix(in srgb, ${focusRingColors[variant]} 65%, transparent)`,
    outline: "2px solid transparent",
    outlineOffset: "2px",
  });

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    const styles = getFocusRingStyles(variant);
    e.currentTarget.style.boxShadow = styles.boxShadow;
    e.currentTarget.style.outline = styles.outline;
    e.currentTarget.style.outlineOffset = styles.outlineOffset;
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.currentTarget.style.boxShadow = baseStyles.boxShadow as string;
    e.currentTarget.style.outline = "none";
    e.currentTarget.style.outlineOffset = "0";
  };

  return (
    <button
      ref={ref}
      style={baseStyles}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      data-variant={variant}
      className={`focus-ring-${variant} ${className || ""}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {loading && (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "1em",
            height: "1em",
            border: "2px solid currentColor",
            borderRightColor: "transparent",
            borderRadius: "50%",
            animation: "spin 0.75s linear infinite",
          }}
        />
      )}
      <span>{loading ? "Loading..." : children}</span>
    </button>
  );
});

Button.displayName = "Button";
