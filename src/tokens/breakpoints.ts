export const breakpoints = {
    sm: "640px",   // Mobile+
    md: "768px",   // Tablet+
    lg: "1024px",  // Desktop
    xl: "1280px",  // Large desktop / wide
    "2xl": "1536px" // Ultra-wide (big dashboards)
  };

export const mediaQueries = {
sm: `@media (min-width: ${breakpoints.sm})`,
md: `@media (min-width: ${breakpoints.md})`,
lg: `@media (min-width: ${breakpoints.lg})`,
xl: `@media (min-width: ${breakpoints.xl})`,
"2xl": `@media (min-width: ${breakpoints["2xl"]})`,
};