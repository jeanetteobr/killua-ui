import React from "react";
import type { SwatchProps } from "./ColorSwatch.types";
import './ColorSwatch.css';

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
  const style = {
    backgroundColor: hex,
    '--kui-swatch-text-color': textColor,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className="kui-swatch"
    >
      <div className="kui-swatch__name">{name}</div>
      <div className="kui-swatch__hex">{hex}</div>
    </div>
  );
};
