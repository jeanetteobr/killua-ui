import { ColorSwatch } from "@/components/core/ColorSwatch";
import { colors } from "@/tokens/colors";
import type { FlatColorMap } from "./ColorTokens.types";

const swatchGroup = (
  title: string,
  items: FlatColorMap[],
  options?: { className?: string; style?: React.CSSProperties }
) => (
  <section
    className={options?.className}
    style={{
      backgroundColor: "var(--background-surface)",
      padding: "var(--spacing-lg)",
      borderRadius: "var(--radius-lg)",
      marginBottom: "var(--spacing-xl)",
      ...(options?.style || {}),
    }}
  >
    <h2
      style={{
        fontSize: "var(--font-size-lg)",
        marginBottom: "var(--spacing-md)",
        fontWeight: "var(--font-weight-bold)",
        color: "var(--text-primary)", // Ensures theme-aware headings
      }}
    >
      {title}
    </h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-md)" }}>
      {items.map(({ name, hex }) => (
        <ColorSwatch
          key={name}
          name={name}
          hex={hex}
        />
      ))}
    </div>
  </section>
);

export const ColorTokens: React.FC = () => {
  // 🌒 Default (dark) theme values from root
  const defaultTheme: FlatColorMap[] = [
    { name: "primary", hex: colors.primary },
    { name: "link", hex: colors.link },
    { name: "info", hex: colors.info },
    { name: "success", hex: colors.success },
    { name: "warning", hex: colors.warning },
    { name: "danger", hex: colors.danger },
    { name: "background.base", hex: colors.background.base },
    { name: "background.surface", hex: colors.background.surface },
    { name: "text.primary", hex: colors.text.primary },
    { name: "text.secondary", hex: colors.text.secondary },
    { name: "text.button", hex: colors.text.button },
  ];

  // ☀️ Light theme overrides
  const lightTheme: FlatColorMap[] = [
    { name: "light.primary", hex: colors.light.primary },
    { name: "light.link", hex: colors.light.link },
    { name: "light.info", hex: colors.light.info },
    { name: "light.success", hex: colors.light.success },
    { name: "light.warning", hex: colors.light.warning },
    { name: "light.danger", hex: colors.light.danger },
    { name: "light.background.base", hex: colors.light.background.base },
    { name: "light.background.surface", hex: colors.light.background.surface },
    { name: "light.text.primary", hex: colors.light.text.primary },
    { name: "light.text.secondary", hex: colors.light.text.secondary },
    { name: "light.text.button", hex: colors.light.text.button },
  ];

  return (
    <main style={{ padding: "var(--spacing-lg)" }}>
      <h1
        style={{
          fontSize: "var(--font-size-xl)",
          fontWeight: "var(--font-weight-bold)",
          marginBottom: "var(--spacing-xl)",
        }}>
        🎨 Color Tokens
      </h1>

      {swatchGroup("🌒 Default Theme: Dark Mode", defaultTheme)}

      <section
        className="light-theme"
      >
        {swatchGroup("☀️ Light Theme Overrides", lightTheme)}
      </section>
    </main>
  );
};
