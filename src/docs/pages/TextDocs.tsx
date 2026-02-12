import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Example, PropsTable, PropDefinition } from "@/docs/components";
import "./DocsPage.css";

const textProps: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content to render",
  },
  {
    name: "as",
    type: "ElementType",
    default: '"p"',
    description: "HTML element to render as (p, span, div, etc.)",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "base" | "lg" | "xl"',
    default: '"base"',
    description: "Text size",
  },
  {
    name: "weight",
    type: '"regular" | "medium" | "bold"',
    default: '"regular"',
    description: "Font weight",
  },
  {
    name: "color",
    type: '"primary" | "secondary" | "muted" | "inherit"',
    default: '"primary"',
    description: "Text color",
  },
  {
    name: "align",
    type: '"left" | "center" | "right"',
    description: "Text alignment",
  },
  {
    name: "truncate",
    type: "boolean",
    default: "false",
    description: "Truncate text with ellipsis (single line)",
  },
  {
    name: "lineClamp",
    type: "number",
    description: "Limit text to specific number of lines",
  },
  {
    name: "inline",
    type: "boolean",
    default: "false",
    description: "Render as inline element",
  },
];

export const TextDocs: React.FC = () => {
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">Text</Heading>
      <p className="docs-page__description">
        A flexible text component for body copy, labels, and general content with size, weight, and color variants.
      </p>

      <div className="docs-page__import">
        <p className="docs-page__import-label">Import</p>
        <pre className="docs-page__code">
          <code>{`import { Text } from '@/components/core/Text';`}</code>
        </pre>
      </div>

      <Example
        title="Basic Usage"
        code={`<Text>Default paragraph text</Text>
<Text size="lg">Large text</Text>
<Text weight="bold">Bold text</Text>
<Text color="secondary">Secondary color</Text>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Text>Default paragraph text</Text>
          <Text size="lg">Large text</Text>
          <Text weight="bold">Bold text</Text>
          <Text color="secondary">Secondary color</Text>
        </div>
      </Example>

      <Example
        title="Sizes"
        description="Five size variants from extra small to extra large."
        code={`<Text size="xs">Extra small (12px)</Text>
<Text size="sm">Small (14px)</Text>
<Text size="base">Base (16px) - default</Text>
<Text size="lg">Large (18px)</Text>
<Text size="xl">Extra large (20px)</Text>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Text size="xs">Extra small (12px)</Text>
          <Text size="sm">Small (14px)</Text>
          <Text size="base">Base (16px) - default</Text>
          <Text size="lg">Large (18px)</Text>
          <Text size="xl">Extra large (20px)</Text>
        </div>
      </Example>

      <Example
        title="Weights"
        code={`<Text weight="regular">Regular weight (400)</Text>
<Text weight="medium">Medium weight (500)</Text>
<Text weight="bold">Bold weight (700)</Text>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Text weight="regular">Regular weight (400)</Text>
          <Text weight="medium">Medium weight (500)</Text>
          <Text weight="bold">Bold weight (700)</Text>
        </div>
      </Example>

      <Example
        title="Colors"
        code={`<Text color="primary">Primary text color</Text>
<Text color="secondary">Secondary text color</Text>
<Text color="muted">Muted text color</Text>
<Text color="inherit">Inherits parent color</Text>`}
        showModes
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Text color="primary">Primary text color</Text>
          <Text color="secondary">Secondary text color</Text>
          <Text color="muted">Muted text color</Text>
          <Text color="inherit">Inherits parent color</Text>
        </div>
      </Example>

      <Example
        title="Alignment"
        description="Control text alignment with the align prop."
        code={`<Text align="left">Left aligned text</Text>
<Text align="center">Center aligned text</Text>
<Text align="right">Right aligned text</Text>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)", width: "100%" }}>
          <Text align="left">Left aligned text</Text>
          <Text align="center">Center aligned text</Text>
          <Text align="right">Right aligned text</Text>
        </div>
      </Example>

      <Example
        title="Truncation"
        description="Single-line truncation with ellipsis or multi-line clamping."
        code={`// Single line truncation
<Text truncate>{longText}</Text>

// Multi-line clamp (2 lines)
<Text lineClamp={2}>{longText}</Text>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)", maxWidth: "400px" }}>
          <div>
            <Text size="sm" color="muted" style={{ marginBottom: "var(--spacing-xs)" }}>Single line truncate:</Text>
            <Text truncate>{longText}</Text>
          </div>
          <div>
            <Text size="sm" color="muted" style={{ marginBottom: "var(--spacing-xs)" }}>Line clamp (2 lines):</Text>
            <Text lineClamp={2}>{longText}</Text>
          </div>
        </div>
      </Example>

      <Example
        title="Polymorphic Rendering"
        description="Use the as prop to render as different HTML elements."
        code={`<Text as="p">Paragraph element (default)</Text>
<Text as="span" inline>Span element</Text>
<Text as="div">Div element</Text>
<Text as="label">Label element</Text>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
          <Text as="p">Paragraph element (default)</Text>
          <div>
            <Text as="span" inline>Span element - </Text>
            <Text as="span" inline weight="bold">inline with other text</Text>
          </div>
          <Text as="div">Div element</Text>
          <Text as="label">Label element</Text>
        </div>
      </Example>

      <PropsTable props={textProps} />

      <section className="docs-page__section">
        <Heading level={2} size="lg">Accessibility</Heading>
        <ul className="docs-page__list">
          <li>Uses semantic elements by default (paragraph)</li>
          <li>Color contrast meets WCAG AA standards</li>
          <li>Use appropriate elements via <code>as</code> prop for context</li>
          <li>Truncated text should have full content available via title or tooltip</li>
        </ul>
      </section>
    </article>
  );
};
