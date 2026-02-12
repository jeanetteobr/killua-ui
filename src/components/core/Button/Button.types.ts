import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "link";

/**
 * Props for the Button component
 * @interface ButtonProps
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>}
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content to be rendered inside the button */
  children: ReactNode;
  /** The visual style variant of the button */
  variant?: ButtonVariant;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
}
