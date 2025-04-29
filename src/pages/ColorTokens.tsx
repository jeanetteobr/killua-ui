import { ColorSwatch } from "../components/tokens/ColorSwatch";

const colorTokens = {
  primary: "#5FD3E9",
  primaryDark: "#00BBD6",
  primaryContrast: "#0F172A",
  danger: "#FF4E9B",
  secondary: "#008891",
  backgroundLight: "#F5F9FA",
  backgroundDark: "#1F2933",
  textLight: "#0F172A",
  textDark: "#FFFFFF",
  neutral100: "#FFFFFF",
  neutral900: "#0F172A",
};

export const ColorTokens = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "2rem" }}>
      {Object.entries(colorTokens).map(([name, hex]) => (
        <ColorSwatch
          key={name}
          name={name}
          hex={hex}
          textColor={name.includes("background") || hex === "#FFFFFF" ? "#0F172A" : "#FFFFFF"}
        />
      ))}
    </div>
  );
};
