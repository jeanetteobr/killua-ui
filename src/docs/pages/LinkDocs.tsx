import { Heading } from "@/components/core/Heading";
import { Text } from "@/components/core/Text";
import { Link } from "@/components/core/Link";
import { Example, PropsTable, PropDefinition } from "@/docs/components";
import "./DocsPage.css";

const linkProps: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Link content",
  },
  {
    name: "href",
    type: "string",
    required: true,
    description: "URL to navigate to",
  },
  {
    name: "variant",
    type: '"default" | "subtle" | "unstyled"',
    default: '"default"',
    description: "Visual variant",
  },
  {
    name: "size",
    type: '"sm" | "base" | "lg"',
    default: '"base"',
    description: "Font size",
  },
  {
    name: "external",
    type: "boolean",
    default: "false",
    description: "Adds target='_blank' and rel='noopener noreferrer' for external links",
  },
  {
    name: "underlineOnHover",
    type: "boolean",
    default: "false",
    description: "Show underline only on hover instead of always",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disable the link",
  },
];

export const LinkDocs: React.FC = () => {
  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">Link</Heading>
      <Text size="lg" color="secondary">
        A styled anchor component for navigation with hover/focus states, external link support, and multiple variants.
      </Text>

      {/* Basic Example */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Basic Usage</Heading>
        <Example
          code={`<Link href="/about">About Us</Link>
<Link href="/contact">Contact</Link>
<Link href="https://github.com" external>GitHub</Link>`}
        >
          <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="https://github.com" external>GitHub</Link>
          </div>
        </Example>
      </section>

      {/* Variants */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Variants</Heading>
        <Text color="secondary">
          Three variants for different visual contexts.
        </Text>
        <Example
          code={`<Link href="#" variant="default">Default link</Link>
<Link href="#" variant="subtle">Subtle link</Link>
<Link href="#" variant="unstyled">Unstyled link</Link>`}
          showModes
        >
          <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
            <Link href="#" variant="default">Default link</Link>
            <Link href="#" variant="subtle">Subtle link</Link>
            <Link href="#" variant="unstyled">Unstyled link</Link>
          </div>
        </Example>
      </section>

      {/* Sizes */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Sizes</Heading>
        <Example
          code={`<Link href="#" size="sm">Small link</Link>
<Link href="#" size="base">Base link (default)</Link>
<Link href="#" size="lg">Large link</Link>`}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
            <Link href="#" size="sm">Small link</Link>
            <Link href="#" size="base">Base link (default)</Link>
            <Link href="#" size="lg">Large link</Link>
          </div>
        </Example>
      </section>

      {/* External Links */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">External Links</Heading>
        <Text color="secondary">
          Use the <code>external</code> prop to automatically add <code>target=&quot;_blank&quot;</code> and security attributes.
        </Text>
        <Example
          code={`<Link href="https://github.com" external>
  GitHub (opens in new tab)
</Link>

<Link href="https://react.dev" external>
  React Documentation
</Link>`}
        >
          <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
            <Link href="https://github.com" external>GitHub (opens in new tab)</Link>
            <Link href="https://react.dev" external>React Documentation</Link>
          </div>
        </Example>
      </section>

      {/* Underline on Hover */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Underline on Hover</Heading>
        <Text color="secondary">
          By default, links are always underlined. Use <code>underlineOnHover</code> to show underline only on hover.
        </Text>
        <Example
          code={`<Link href="#">Always underlined (default)</Link>
<Link href="#" underlineOnHover>Underline on hover only</Link>`}
        >
          <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
            <Link href="#">Always underlined (default)</Link>
            <Link href="#" underlineOnHover>Underline on hover only</Link>
          </div>
        </Example>
      </section>

      {/* Disabled State */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Disabled State</Heading>
        <Example
          code={`<Link href="/page" disabled>Disabled link</Link>`}
        >
          <Link href="/page" disabled>Disabled link</Link>
        </Example>
      </section>

      {/* Inline with Text */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Inline with Text</Heading>
        <Text color="secondary">
          Links work naturally inline with other text content.
        </Text>
        <Example
          code={`<Text>
  Read our <Link href="/docs">documentation</Link> to get started,
  or check out the <Link href="https://github.com" external>source code</Link>.
</Text>`}
        >
          <Text>
            Read our <Link href="/docs">documentation</Link> to get started,
            or check out the <Link href="https://github.com" external>source code</Link>.
          </Text>
        </Example>
      </section>

      {/* Props Table */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Props</Heading>
        <PropsTable props={linkProps} />
      </section>

      {/* Accessibility */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Accessibility</Heading>
        <ul className="docs-page__list">
          <li>Uses semantic <code>&lt;a&gt;</code> element for proper screen reader announcement</li>
          <li>External links include <code>rel=&quot;noopener noreferrer&quot;</code> for security</li>
          <li>Visible focus ring for keyboard navigation</li>
          <li>Disabled links use <code>aria-disabled</code> and prevent navigation</li>
          <li>Color contrast meets WCAG AA standards in both themes</li>
        </ul>
      </section>

      {/* Link vs Button */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Link vs Button</Heading>
        <Text color="secondary">
          Use <code>&lt;Link&gt;</code> for navigation and <code>&lt;Button variant=&quot;link&quot;&gt;</code> for actions that look like links.
        </Text>
        <ul className="docs-page__list">
          <li><strong>Link:</strong> Navigate to another page or URL</li>
          <li><strong>Button variant=&quot;link&quot;:</strong> Trigger an action (submit, toggle, etc.) styled as a link</li>
        </ul>
      </section>
    </article>
  );
};
