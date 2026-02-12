import React from "react";
import { Heading } from "@/components/core/Heading";
import { Example, PropsTable, PropDefinition } from "@/docs/components";
import "./DocsPage.css";

const headingProps: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The content to be rendered inside the heading",
  },
  {
    name: "level",
    type: "1 | 2 | 3 | 4 | 5 | 6",
    default: "2",
    description: "The semantic heading level (h1-h6)",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
    default: "matches level",
    description: "Visual size of the heading (can differ from semantic level)",
  },
  {
    name: "align",
    type: '"left" | "center" | "right"',
    default: '"left"',
    description: "Text alignment",
  },
  {
    name: "truncate",
    type: "boolean",
    default: "false",
    description: "Whether to truncate text with ellipsis if it overflows",
  },
];

export const HeadingDocs: React.FC = () => {
  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">Heading</Heading>
      <p className="docs-page__description">
        Headings establish content hierarchy and structure. They support semantic 
        levels (h1-h6) with independent visual sizing for flexible layouts.
      </p>

      <div className="docs-page__import">
        <p className="docs-page__import-label">Import</p>
        <pre className="docs-page__code">
          <code>{`import { Heading } from '@/components/core/Heading';`}</code>
        </pre>
      </div>

      <Example
        title="Levels"
        description="Headings render as h1-h6 elements. Each level has a default visual size."
        code={`<Heading level={1}>Heading 1</Heading>
<Heading level={2}>Heading 2</Heading>
<Heading level={3}>Heading 3</Heading>
<Heading level={4}>Heading 4</Heading>
<Heading level={5}>Heading 5</Heading>
<Heading level={6}>Heading 6</Heading>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)", width: "100%" }}>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </div>
      </Example>

      <Example
        title="Decoupled Size"
        description="Visual size can differ from semantic level. Useful when you need an h2 for SEO but want it to look smaller."
        code={`<Heading level={2} size="sm">H2 with small visual size</Heading>
<Heading level={4} size="xl">H4 with extra-large visual size</Heading>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)", width: "100%" }}>
          <Heading level={2} size="sm">H2 with small visual size</Heading>
          <Heading level={4} size="xl">H4 with extra-large visual size</Heading>
        </div>
      </Example>

      <Example
        title="Alignment"
        description="Control text alignment with the align prop."
        code={`<Heading align="left">Left aligned</Heading>
<Heading align="center">Center aligned</Heading>
<Heading align="right">Right aligned</Heading>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)", width: "100%" }}>
          <Heading align="left">Left aligned</Heading>
          <Heading align="center">Center aligned</Heading>
          <Heading align="right">Right aligned</Heading>
        </div>
      </Example>

      <Example
        title="Truncation"
        description="Long headings can be truncated with an ellipsis."
        code={`<Heading truncate>
  This is a very long heading that will be truncated
</Heading>`}
      >
        <div style={{ width: "250px" }}>
          <Heading truncate>
            This is a very long heading that will be truncated with an ellipsis when it overflows
          </Heading>
        </div>
      </Example>

      <PropsTable props={headingProps} />

      <section className="docs-page__section">
        <Heading level={2} size="lg">Accessibility</Heading>
        <ul className="docs-page__list">
          <li>Uses semantic heading elements (h1-h6)</li>
          <li>Maintain proper heading hierarchy for screen readers</li>
          <li>Only one h1 per page for optimal document structure</li>
          <li>Don't skip heading levels (e.g., h1 → h3)</li>
        </ul>
      </section>
    </article>
  );
};
