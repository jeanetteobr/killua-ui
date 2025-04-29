import { ColorSwatch } from "../components/tokens/ColorSwatch";
import { colors } from "../tokens/colors";

type FlatColorMap = { name: string; hex: string };

const flattenColors = (obj: Record<string, any>, prefix = ""): FlatColorMap[] => {
  return Object.entries(obj).flatMap(([key, value]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    return typeof value === "string"
      ? [{ name, hex: value }]
      : flattenColors(value, name);
  });
};

export const ColorTokens: React.FC = () => {
  const colorList = flattenColors(colors);

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🎨 Color Tokens</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {colorList.map(({ name, hex }) => (
          <ColorSwatch
            key={name}
            name={name}
            hex={hex}
            textColor={name.includes("background") || hex === "#FFFFFF" ? "#0F172A" : "#FFFFFF"}
          />
        ))}
      </div>
    </main>
  );
};
