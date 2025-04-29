export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "link";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
