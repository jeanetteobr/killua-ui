import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles = {
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-text)",
    border: "none",
  },
  secondary: {
    backgroundColor: "var(--color-bg)",
    color: "var(--color-text)",
    border: "1px solid var(--color-primary)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-text)",
    border: "none",
  },
  danger: {
    backgroundColor: "var(--color-danger)",
    color: "#ffffff",
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
