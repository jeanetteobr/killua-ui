import type { HTMLAttributes, ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** The content to be rendered inside the heading */
  children: ReactNode;
  
  /** 
   * The semantic heading level (h1-h6)
   * @default 2
   */
  level?: HeadingLevel;
  
  /**
   * Visual size of the heading (can differ from semantic level)
   * Useful for maintaining visual hierarchy while using correct semantic levels
   * @default - matches the level (1 = "2xl", 2 = "xl", etc.)
   */
  size?: HeadingSize;
  
  /**
   * Text alignment
   * @default "left"
   */
  align?: "left" | "center" | "right";
  
  /**
   * Whether to truncate text with ellipsis if it overflows
   * @default false
   */
  truncate?: boolean;
}
