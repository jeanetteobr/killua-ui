import React from "react";
import { ButtonProps } from "./Button.types";

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

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  ...props
}) => {
  const style: React.CSSProperties = {
    ...variantStyles[variant],
    padding: "var(--spacing-sm) var(--spacing-md)",
    borderRadius: "var(--radius-md)",
    fontSize: "var(--font-size-sm)",
    fontWeight: 500,
    boxShadow: "var(--elevation-sm)",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled || loading ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "background-color 0.2s ease, box-shadow 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button
      style={style}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
