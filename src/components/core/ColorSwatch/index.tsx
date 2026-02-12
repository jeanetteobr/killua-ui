import React from "react";
import type { SwatchProps } from "./ColorSwatch.types";
import { isLightColor } from "@/utils/colorContrast";
import './ColorSwatch.css';

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
