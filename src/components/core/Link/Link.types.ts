import type { AnchorHTMLAttributes, ReactNode } from "react";

export type LinkVariant = "default" | "subtle" | "unstyled";
export type LinkSize = "sm" | "base" | "lg";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link content */
  children: ReactNode;
  
  /** URL to navigate to */
  href: string;
  
  /** Visual variant */
  variant?: LinkVariant;
  
  /** Font size */
  size?: LinkSize;
  
  /** Whether this is an external link (adds target="_blank" and rel attributes) */
  external?: boolean;
  
  /** Show underline only on hover (default shows underline always) */
  underlineOnHover?: boolean;
  
  /** Disable the link */
  disabled?: boolean;
}
