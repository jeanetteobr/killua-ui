import type { TextProps } from "./Text.types";
import "./Text.css";

/**
 * Text component for body copy and general text content.
 * 
 * @example
 * // Basic usage
 * <Text>Hello world</Text>
 * 
 * // With size and weight
 * <Text size="lg" weight="bold">Large bold text</Text>
 * 
 * // As a span
 * <Text as="span" inline>Inline text</Text>
 * 
 * // With line clamping
 * <Text lineClamp={2}>Long text that will be truncated after 2 lines...</Text>
 */
export const Text: React.FC<TextProps> = ({
  children,
  as: Component = "p",
  size = "base",
  weight = "regular",
  color = "primary",
  align,
  truncate = false,
  lineClamp,
  inline = false,
  className = "",
  style,
  ...props
}) => {
  // Build class names
  const classes = [
    "kui-text",
    `kui-text--${size}`,
    `kui-text--${weight}`,
    `kui-text--${color}`,
    align && `kui-text--${align}`,
    truncate && "kui-text--truncate",
    lineClamp && "kui-text--line-clamp",
    inline && "kui-text--inline",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Build inline styles (for line clamp)
  const inlineStyles: React.CSSProperties = {
    ...style,
    ...(lineClamp && { WebkitLineClamp: lineClamp }),
  };

  return (
    <Component className={classes} style={inlineStyles} {...props}>
      {children}
    </Component>
  );
};
