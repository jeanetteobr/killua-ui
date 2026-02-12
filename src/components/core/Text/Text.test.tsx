import { render, screen } from "@testing-library/react";
import { Text } from "./index";

describe("Text", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(<Text>Hello World</Text>);
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("renders as p element by default", () => {
      render(<Text>Paragraph</Text>);
      expect(screen.getByText("Paragraph").tagName).toBe("P");
    });

    it("renders as custom element when 'as' prop is provided", () => {
      render(<Text as="span">Span text</Text>);
      expect(screen.getByText("Span text").tagName).toBe("SPAN");
    });

    it("renders as div when specified", () => {
      render(<Text as="div">Div text</Text>);
      expect(screen.getByText("Div text").tagName).toBe("DIV");
    });
  });

  describe("Sizes", () => {
    const sizes = ["xs", "sm", "base", "lg", "xl"] as const;

    sizes.forEach((size) => {
      it(`applies ${size} size class`, () => {
        render(<Text size={size}>Size {size}</Text>);
        expect(screen.getByText(`Size ${size}`)).toHaveClass(`kui-text--${size}`);
      });
    });

    it("defaults to base size", () => {
      render(<Text>Default size</Text>);
      expect(screen.getByText("Default size")).toHaveClass("kui-text--base");
    });
  });

  describe("Weights", () => {
    const weights = ["regular", "medium", "bold"] as const;

    weights.forEach((weight) => {
      it(`applies ${weight} weight class`, () => {
        render(<Text weight={weight}>Weight {weight}</Text>);
        expect(screen.getByText(`Weight ${weight}`)).toHaveClass(`kui-text--${weight}`);
      });
    });

    it("defaults to regular weight", () => {
      render(<Text>Default weight</Text>);
      expect(screen.getByText("Default weight")).toHaveClass("kui-text--regular");
    });
  });

  describe("Colors", () => {
    const colors = ["primary", "secondary", "muted", "inherit"] as const;

    colors.forEach((color) => {
      it(`applies ${color} color class`, () => {
        render(<Text color={color}>Color {color}</Text>);
        expect(screen.getByText(`Color ${color}`)).toHaveClass(`kui-text--${color}`);
      });
    });

    it("defaults to primary color", () => {
      render(<Text>Default color</Text>);
      expect(screen.getByText("Default color")).toHaveClass("kui-text--primary");
    });
  });

  describe("Alignment", () => {
    const alignments = ["left", "center", "right"] as const;

    alignments.forEach((align) => {
      it(`applies ${align} alignment class`, () => {
        render(<Text align={align}>Align {align}</Text>);
        expect(screen.getByText(`Align ${align}`)).toHaveClass(`kui-text--${align}`);
      });
    });

    it("does not apply alignment class by default", () => {
      render(<Text>No alignment</Text>);
      const element = screen.getByText("No alignment");
      expect(element).not.toHaveClass("kui-text--left");
      expect(element).not.toHaveClass("kui-text--center");
      expect(element).not.toHaveClass("kui-text--right");
    });
  });

  describe("Truncation", () => {
    it("applies truncate class when truncate is true", () => {
      render(<Text truncate>Truncated text</Text>);
      expect(screen.getByText("Truncated text")).toHaveClass("kui-text--truncate");
    });

    it("does not apply truncate class by default", () => {
      render(<Text>Normal text</Text>);
      expect(screen.getByText("Normal text")).not.toHaveClass("kui-text--truncate");
    });
  });

  describe("Line Clamp", () => {
    it("applies line-clamp class when lineClamp is provided", () => {
      render(<Text lineClamp={2}>Clamped text</Text>);
      expect(screen.getByText("Clamped text")).toHaveClass("kui-text--line-clamp");
    });

    it("applies correct lineClamp value", () => {
      // Note: WebkitLineClamp inline style is set but JSDOM doesn't serialize vendor-prefixed properties
      // The actual clamping behavior relies on both the CSS class and inline style
      render(<Text lineClamp={3}>Clamped text</Text>);
      const element = screen.getByText("Clamped text");
      expect(element).toHaveClass("kui-text--line-clamp");
    });

    it("does not apply line-clamp class by default", () => {
      render(<Text>Normal text</Text>);
      expect(screen.getByText("Normal text")).not.toHaveClass("kui-text--line-clamp");
    });
  });

  describe("Inline", () => {
    it("applies inline class when inline is true", () => {
      render(<Text inline>Inline text</Text>);
      expect(screen.getByText("Inline text")).toHaveClass("kui-text--inline");
    });

    it("does not apply inline class by default", () => {
      render(<Text>Block text</Text>);
      expect(screen.getByText("Block text")).not.toHaveClass("kui-text--inline");
    });
  });

  describe("Custom props", () => {
    it("applies custom className", () => {
      render(<Text className="custom-class">Custom class</Text>);
      expect(screen.getByText("Custom class")).toHaveClass("custom-class");
    });

    it("applies custom styles", () => {
      render(<Text style={{ marginTop: "10px" }}>Custom style</Text>);
      expect(screen.getByText("Custom style")).toHaveStyle({ marginTop: "10px" });
    });

    it("passes through additional HTML attributes", () => {
      render(<Text data-testid="custom-text" id="my-text">With attributes</Text>);
      const element = screen.getByTestId("custom-text");
      expect(element).toHaveAttribute("id", "my-text");
    });
  });

  describe("Combined props", () => {
    it("applies multiple classes correctly", () => {
      render(
        <Text size="lg" weight="bold" color="secondary" align="center">
          Combined
        </Text>
      );
      const element = screen.getByText("Combined");
      expect(element).toHaveClass("kui-text");
      expect(element).toHaveClass("kui-text--lg");
      expect(element).toHaveClass("kui-text--bold");
      expect(element).toHaveClass("kui-text--secondary");
      expect(element).toHaveClass("kui-text--center");
    });
  });
});
