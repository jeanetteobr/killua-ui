import { render, screen, fireEvent } from "@testing-library/react";
import { Link } from "./index";

describe("Link", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(<Link href="/about">About</Link>);
      expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("renders as an anchor element", () => {
      render(<Link href="/about">About</Link>);
      expect(screen.getByRole("link")).toBeInTheDocument();
    });

    it("applies href attribute", () => {
      render(<Link href="/about">About</Link>);
      expect(screen.getByRole("link")).toHaveAttribute("href", "/about");
    });

    it("applies base classes", () => {
      render(<Link href="/about">About</Link>);
      expect(screen.getByRole("link")).toHaveClass("kui-link");
    });
  });

  describe("Variants", () => {
    const variants = ["default", "subtle", "unstyled"] as const;

    variants.forEach((variant) => {
      it(`applies ${variant} variant class`, () => {
        render(
          <Link href="/test" variant={variant}>
            {variant} link
          </Link>
        );
        expect(screen.getByRole("link")).toHaveClass(`kui-link--${variant}`);
      });
    });

    it("defaults to default variant", () => {
      render(<Link href="/test">Default</Link>);
      expect(screen.getByRole("link")).toHaveClass("kui-link--default");
    });
  });

  describe("Sizes", () => {
    const sizes = ["sm", "base", "lg"] as const;

    sizes.forEach((size) => {
      it(`applies ${size} size class`, () => {
        render(
          <Link href="/test" size={size}>
            {size} link
          </Link>
        );
        expect(screen.getByRole("link")).toHaveClass(`kui-link--${size}`);
      });
    });

    it("defaults to base size", () => {
      render(<Link href="/test">Default size</Link>);
      expect(screen.getByRole("link")).toHaveClass("kui-link--base");
    });
  });

  describe("External links", () => {
    it("adds target='_blank' for external links", () => {
      render(
        <Link href="https://example.com" external>
          External
        </Link>
      );
      expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
    });

    it("adds rel='noopener noreferrer' for external links", () => {
      render(
        <Link href="https://example.com" external>
          External
        </Link>
      );
      expect(screen.getByRole("link")).toHaveAttribute(
        "rel",
        "noopener noreferrer"
      );
    });

    it("does not add external attributes by default", () => {
      render(<Link href="/internal">Internal</Link>);
      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("target");
      expect(link).not.toHaveAttribute("rel");
    });
  });

  describe("Underline on hover", () => {
    it("applies underline-hover class when underlineOnHover is true", () => {
      render(
        <Link href="/test" underlineOnHover>
          Hover underline
        </Link>
      );
      expect(screen.getByRole("link")).toHaveClass("kui-link--underline-hover");
    });

    it("does not apply underline-hover class by default", () => {
      render(<Link href="/test">Normal</Link>);
      expect(screen.getByRole("link")).not.toHaveClass(
        "kui-link--underline-hover"
      );
    });
  });

  describe("Disabled state", () => {
    it("applies disabled class when disabled", () => {
      render(
        <Link href="/test" disabled>
          Disabled
        </Link>
      );
      expect(screen.getByText("Disabled")).toHaveClass("kui-link--disabled");
    });

    it("sets aria-disabled when disabled", () => {
      render(
        <Link href="/test" disabled>
          Disabled
        </Link>
      );
      expect(screen.getByText("Disabled")).toHaveAttribute("aria-disabled", "true");
    });

    it("removes href when disabled", () => {
      render(
        <Link href="/test" disabled>
          Disabled
        </Link>
      );
      expect(screen.getByText("Disabled")).not.toHaveAttribute("href");
    });

    it("prevents click when disabled", () => {
      const handleClick = jest.fn();
      render(
        <Link href="/test" disabled onClick={handleClick}>
          Disabled
        </Link>
      );
      fireEvent.click(screen.getByText("Disabled"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Click handling", () => {
    it("calls onClick when clicked", () => {
      const handleClick = jest.fn();
      render(
        <Link href="/test" onClick={handleClick}>
          Clickable
        </Link>
      );
      fireEvent.click(screen.getByRole("link"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Custom props", () => {
    it("applies custom className", () => {
      render(
        <Link href="/test" className="custom-class">
          Custom
        </Link>
      );
      expect(screen.getByRole("link")).toHaveClass("custom-class");
    });

    it("passes through additional HTML attributes", () => {
      render(
        <Link href="/test" data-testid="custom-link" id="my-link">
          With attributes
        </Link>
      );
      const link = screen.getByTestId("custom-link");
      expect(link).toHaveAttribute("id", "my-link");
    });

    it("supports aria-label", () => {
      render(
        <Link href="/test" aria-label="Go to test page">
          Test
        </Link>
      );
      expect(screen.getByRole("link")).toHaveAttribute(
        "aria-label",
        "Go to test page"
      );
    });
  });

  describe("Combined props", () => {
    it("applies multiple classes correctly", () => {
      render(
        <Link href="/test" variant="subtle" size="lg" underlineOnHover>
          Combined
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveClass("kui-link");
      expect(link).toHaveClass("kui-link--subtle");
      expect(link).toHaveClass("kui-link--lg");
      expect(link).toHaveClass("kui-link--underline-hover");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to anchor element", () => {
      const ref = { current: null as HTMLAnchorElement | null };
      render(
        <Link href="/test" ref={ref}>
          With ref
        </Link>
      );
      expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    });
  });
});
