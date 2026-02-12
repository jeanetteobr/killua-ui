import { forwardRef } from "react";
import type { LinkProps } from "./Link.types";
import "./Link.css";

/**
 * Link component for navigation with consistent styling.
 * 
 * @example
 * // Basic usage
 * <Link href="/about">About</Link>
 * 
 * // External link (auto-adds target="_blank" and security attributes)
 * <Link href="https://github.com" external>GitHub</Link>
 * 
 * // Subtle variant
 * <Link href="/docs" variant="subtle">Documentation</Link>
 * 
 * // Underline only on hover
 * <Link href="/contact" underlineOnHover>Contact</Link>
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      href,
      variant = "default",
      size = "base",
      external = false,
      underlineOnHover = false,
      disabled = false,
      className = "",
      onClick,
      ...props
    },
    ref
  ) => {
    // Build class names
    const classes = [
      "kui-link",
      `kui-link--${variant}`,
      `kui-link--${size}`,
      underlineOnHover && "kui-link--underline-hover",
      disabled && "kui-link--disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // External link attributes
    const externalProps = external
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

    // Click handling with disabled support
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        className={classes}
        aria-disabled={disabled || undefined}
        {...externalProps}
        {...props}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
