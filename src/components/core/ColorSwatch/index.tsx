import React from "react";
import type { SwatchProps } from "./ColorSwatch.types";

// Helper to check if a color is light
function isLightColor(hex: string): boolean {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  const r = parseInt(hex.substr(0,2), 16);
  const g = parseInt(hex.substr(2,2), 16);
  const b = parseInt(hex.substr(4,2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

export const ColorSwatch: React.FC<SwatchProps> = ({ name, hex }) => {
  const textColor = isLightColor(hex) ? "#0F172A" : "#FFFFFF";

  return (
    <div
      style={{
        backgroundColor: hex,
        color: textColor,
        padding: "var(--spacing-md)",
        borderRadius: "var(--radius-md)",
        width: "150px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "var(--elevation-sm)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          fontWeight: "var(--font-weight-medium)",
          fontSize: "var(--font-size-sm)",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: "var(--font-size-xs)" }}>{hex}</div>
    </div>
  );
};
