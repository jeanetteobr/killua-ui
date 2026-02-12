import { Heading } from "@/components/core/Heading";
import { ColorSwatch } from "@/components/core/ColorSwatch";
import { colors } from "@/tokens/colors";
import { typography } from "@/tokens/typography";
import { spacing } from "@/tokens/spacing";
import { radii } from "@/tokens/radii";
import { elevation } from "@/tokens/elevation";
import "./DocsPage.css";
import "./TokensDocs.css";

export const TokensDocs: React.FC = () => {
  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">Design Tokens</Heading>
      <p className="docs-page__description">
        Design tokens are the foundational values that define the visual language of Killua UI.
        They ensure consistency across all components and make theming simple.
      </p>

      {/* Colors Section */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Colors</Heading>
        <p>
          Killua UI uses a semantic color system with separate palettes for dark and light modes.
          All colors are available as CSS variables (e.g., <code>var(--color-primary)</code>).
        </p>

        <Heading level={3} size="md">Dark Mode (Default)</Heading>
        <div className="tokens-grid tokens-grid--colors">
          <ColorSwatch name="primary" hex={colors.primary} />
          <ColorSwatch name="secondary" hex={colors.secondary} />
          <ColorSwatch name="link" hex={colors.link} />
          <ColorSwatch name="info" hex={colors.info} />
          <ColorSwatch name="success" hex={colors.success} />
          <ColorSwatch name="warning" hex={colors.warning} />
          <ColorSwatch name="danger" hex={colors.danger} />
        </div>

        <Heading level={4} size="sm">Backgrounds</Heading>
        <div className="tokens-grid tokens-grid--colors">
          <ColorSwatch name="background.base" hex={colors.background.base} />
          <ColorSwatch name="background.surface" hex={colors.background.surface} />
        </div>

        <Heading level={4} size="sm">Text</Heading>
        <div className="tokens-grid tokens-grid--colors">
          <ColorSwatch name="text.primary" hex={colors.text.primary} />
          <ColorSwatch name="text.secondary" hex={colors.text.secondary} />
        </div>

        <Heading level={3} size="md">Light Mode</Heading>
        <div className="tokens-grid tokens-grid--colors light-theme" style={{ padding: "var(--spacing-md)", borderRadius: "var(--radius-lg)" }}>
          <ColorSwatch name="primary" hex={colors.light.primary} />
          <ColorSwatch name="secondary" hex={colors.light.secondary} />
          <ColorSwatch name="link" hex={colors.light.link} />
          <ColorSwatch name="info" hex={colors.light.info} />
          <ColorSwatch name="success" hex={colors.light.success} />
          <ColorSwatch name="warning" hex={colors.light.warning} />
          <ColorSwatch name="danger" hex={colors.light.danger} />
        </div>
      </section>

      {/* Typography Section */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Typography</Heading>
        <p>
          Typography tokens define font sizes, weights, and line heights.
          The primary font is Satoshi, with Inter as a fallback.
        </p>

        <Heading level={3} size="md">Font Sizes</Heading>
        <div className="tokens-list">
          {Object.entries(typography.fontSize).map(([name, value]) => (
            <div key={name} className="token-item">
              <span className="token-item__sample" style={{ fontSize: value }}>
                The quick brown fox
              </span>
              <div className="token-item__info">
                <code>--font-size-{name}</code>
                <span className="token-item__value">{value}</span>
              </div>
            </div>
          ))}
        </div>

        <Heading level={3} size="md">Font Weights</Heading>
        <div className="tokens-list">
          {Object.entries(typography.fontWeight).map(([name, value]) => (
            <div key={name} className="token-item">
              <span className="token-item__sample" style={{ fontWeight: value }}>
                The quick brown fox
              </span>
              <div className="token-item__info">
                <code>--font-weight-{name}</code>
                <span className="token-item__value">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing Section */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Spacing</Heading>
        <p>
          A consistent spacing scale for margins, padding, and gaps.
        </p>

        <div className="tokens-list">
          {Object.entries(spacing).map(([name, value]) => (
            <div key={name} className="token-item token-item--spacing">
              <div 
                className="token-item__spacing-box" 
                style={{ width: value, height: value }}
              />
              <div className="token-item__info">
                <code>--spacing-{name}</code>
                <span className="token-item__value">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius Section */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Border Radius</Heading>
        <p>
          Consistent corner rounding for UI elements.
        </p>

        <div className="tokens-grid tokens-grid--radii">
          {Object.entries(radii).map(([name, value]) => (
            <div key={name} className="token-card">
              <div 
                className="token-card__preview token-card__preview--radius" 
                style={{ borderRadius: value }}
              />
              <code>--radius-{name}</code>
              <span className="token-card__value">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Elevation Section */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Elevation</Heading>
        <p>
          Box shadows for creating depth and visual hierarchy.
        </p>

        <div className="tokens-grid tokens-grid--elevation">
          {Object.entries(elevation).map(([name, value]) => (
            <div key={name} className="token-card">
              <div 
                className="token-card__preview token-card__preview--elevation" 
                style={{ boxShadow: value }}
              />
              <code>--elevation-{name}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Section */}
      <section className="docs-page__section">
        <Heading level={2} size="lg">Usage</Heading>
        
        <Heading level={3} size="md">CSS Variables</Heading>
        <pre className="docs-page__code">
          <code>{`.my-component {
  color: var(--text-primary);
  background: var(--background-surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-sm);
}`}</code>
        </pre>

        <Heading level={3} size="md">TypeScript Import</Heading>
        <pre className="docs-page__code">
          <code>{`import { colors, spacing, typography } from 'killua-ui';

// Use in inline styles or CSS-in-JS
const styles = {
  color: colors.primary,
  padding: spacing.md,
  fontSize: typography.fontSize.lg,
};`}</code>
        </pre>
      </section>
    </article>
  );
};
