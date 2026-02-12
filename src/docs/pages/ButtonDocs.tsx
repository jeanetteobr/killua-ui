import React from "react";
import { Heading } from "@/components/core/Heading";
import { Button } from "@/components/core/Button";
import { Example, PropsTable, PropDefinition } from "@/docs/components";
import "./DocsPage.css";

const buttonProps: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The content to be rendered inside the button",
  },
  {
    name: "variant",
    type: '"primary" | "secondary" | "ghost" | "danger" | "success" | "warning" | "info" | "link"',
    default: '"primary"',
    description: "The visual style variant of the button",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the button is disabled",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Whether the button is in a loading state",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Whether the button should take up the full width of its container",
  },
  {
    name: "bgColor",
    type: "string",
    description: "Custom background color (hex). Overrides variant color.",
  },
];

export const ButtonDocs: React.FC = () => {
  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">Button</Heading>
      <p className="docs-page__description">
        Buttons trigger actions or navigate users. They come in multiple variants 
        for different contexts and importance levels.
      </p>

      <div className="docs-page__import">
        <p className="docs-page__import-label">Import</p>
        <pre className="docs-page__code">
          <code>{`import { Button } from '@/components/core/Button';`}</code>
        </pre>
      </div>

      <Example
        title="Variants"
        description="Buttons come in several semantic variants for different use cases."
        showModes
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="link">Link</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="link">Link</Button>
      </Example>

      <Example
        title="States"
        description="Buttons can be disabled or show a loading state."
        code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
      >
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </Example>

      <Example
        title="Full Width"
        description="Buttons can expand to fill their container width."
        code={`<Button fullWidth>Full Width Button</Button>`}
      >
        <div style={{ width: "100%" }}>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </Example>

      <Example
        title="Custom Color"
        description="Override the button color with a custom hex value."
        code={`<Button bgColor="#FF6B6B">Custom Color</Button>
<Button bgColor="#4ECDC4">Teal Button</Button>`}
      >
        <Button bgColor="#FF6B6B">Custom Color</Button>
        <Button bgColor="#4ECDC4">Teal Button</Button>
      </Example>

      <PropsTable props={buttonProps} />

      <section className="docs-page__section">
        <Heading level={2} size="lg">Accessibility</Heading>
        <ul className="docs-page__list">
          <li>Uses semantic <code>&lt;button&gt;</code> element</li>
          <li>Supports <code>aria-disabled</code> and <code>aria-busy</code> for loading states</li>
          <li>Keyboard accessible with visible focus indicators</li>
          <li>Link variant uses <code>role=&quot;link&quot;</code> for screen readers</li>
          <li>Loading state announces &quot;(Loading...)&quot; to assistive technology</li>
        </ul>
      </section>
    </article>
  );
};
