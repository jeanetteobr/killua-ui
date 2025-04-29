import React from "react";
import tinycolor from "tinycolor2";
import { useWhiteTextAlways } from "@/utils/colorHelpers";

type SwatchProps = {
  name: string;
  hex: string;
  textColor?: string;
};

export const ColorSwatch: React.FC<SwatchProps> = ({ name, hex }) => {
  const forceWhite = useWhiteTextAlways(name);
  const fallbackTextColor = tinycolor(hex).isLight() ? "#0F172A" : "#FFFFFF";

  return (
    <div
      style={{
        backgroundColor: hex,
        color: forceWhite ? "var(--text-on-solid)" : fallbackTextColor,
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
          wordBreak: "break-word", // 💥 the key fix
          overflowWrap: "anywhere", // added backup
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: "var(--font-size-xs)" }}>{hex}</div>
    </div>
  );
};