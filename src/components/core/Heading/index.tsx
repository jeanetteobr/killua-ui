import React from "react";
import type { HeadingProps, HeadingLevel, HeadingSize } from "./Heading.types";
import './Heading.css';

/**
 * Maps heading levels to default visual sizes
 */
const levelToSize: Record<HeadingLevel, HeadingSize> = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs",
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  size,
  align = "left",
  truncate = false,
  className,
  ...props
}) => {
  // Use provided size or derive from level
  const resolvedSize = size ?? levelToSize[level];
  
  const classes = [
    'kui-heading',
    `kui-heading--${resolvedSize}`,
    `kui-heading--${align}`,
    truncate ? 'kui-heading--truncate' : '',
    className,
  ].filter(Boolean).join(' ');

  // Create the appropriate heading element
  const Tag = `h${level}` as const;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
