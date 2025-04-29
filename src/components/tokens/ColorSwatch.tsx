import React from "react";
import tinycolor from "tinycolor2";

type SwatchProps = {
  name: string;
  hex: string;
  textColor?: string;
};

export const ColorSwatch: React.FC<SwatchProps> = ({ name, hex }) => {
  const isLight = name.includes("danger") ? false : tinycolor(hex).isLight();
  const textColor = isLight ? "#0F172A" : "#FFFFFF";

  return (
    <div
      style={{
        backgroundColor: hex,
        color: textColor,
        padding: "1rem",
        borderRadius: "8px",
        width: "150px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "0.85rem" }}>{name}</div>
      <div style={{ fontSize: "0.75rem" }}>{hex}</div>
    </div>
  );
};
