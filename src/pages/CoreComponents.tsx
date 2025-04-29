import { Button } from "../components/core/Button";

const variants = [
  "primary",
  "secondary",
  "ghost",
  "danger",
  "success",
  "warning",
  "info",
  "link",
] as const;

export const CoreComponents: React.FC = () => {
  return (
    <main style={{ padding: "var(--spacing-lg)" }}>
      <h1
        style={{
          fontSize: "var(--font-size-xl)",
          fontWeight: "var(--font-weight-bold)",
          marginBottom: "var(--spacing-xl)",
        }}
      >
        🧩 Core Components
      </h1>

      <section
        style={{
          backgroundColor: "var(--background-surface)",
          padding: "var(--spacing-lg)",
          borderRadius: "var(--radius-lg)",
          marginBottom: "var(--spacing-xl)",
        }}
      >
        <h2
          style={{
            fontSize: "var(--font-size-lg)",
            marginBottom: "var(--spacing-md)",
            color: "var(--text-primary)",
          }}
        >
          Buttons – Dark Mode (Default)
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-md)" }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            Loading...
          </Button>
        </div>
      </section>

      <section
        className="light-theme"
        style={{
          backgroundColor: "var(--background-surface)",
          padding: "var(--spacing-lg)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <h2
          style={{
            fontSize: "var(--font-size-lg)",
            marginBottom: "var(--spacing-md)",
            color: "var(--text-primary)",
          }}
        >
          Buttons – Light Mode
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-md)" }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            Loading...
          </Button>
        </div>
      </section>
    </main>
  );
};
