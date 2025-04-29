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
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Core Components</h1>


      <section className="dark-theme" style={{ marginBottom: "3rem",backgroundColor: "var(--background-base)" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
          Button Variants (Dark)
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
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

      <section style={{  padding: "2rem", borderRadius: "12px", }} className="light-theme">
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Button Variants (Light)</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
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
