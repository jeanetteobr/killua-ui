import type { HTMLAttributes, ElementType, ReactNode } from "react";

export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
export type TextWeight = "regular" | "medium" | "bold";
export type TextColor = "primary" | "secondary" | "muted" | "inherit";
export type TextAlign = "left" | "center" | "right";

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  /** Content to render */
  children: ReactNode;
  
  /** Element to render as */
  as?: ElementType;
  
  /** Text size */
  size?: TextSize;
  
  /** Font weight */
  weight?: TextWeight;
  
  /** Text color */
  color?: TextColor;
  
  /** Text alignment */
  align?: TextAlign;
  
  /** Truncate text with ellipsis (single line) */
  truncate?: boolean;
  
  /** Limit text to specific number of lines (multi-line truncation) */
  lineClamp?: number;
  
  /** Render as inline element (span) */
  inline?: boolean;
}
