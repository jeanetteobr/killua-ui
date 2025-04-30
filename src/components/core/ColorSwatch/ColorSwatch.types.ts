export type ColorSwatchProps = {
  children?: React.ReactNode;
  // Add your props here
} & React.HTMLAttributes<HTMLDivElement>;

export type SwatchProps = {
  name: string;
  hex: string;
  textColor?: string;
};
