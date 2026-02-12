import React from "react";
import { useParams } from "react-router-dom";
import { Heading } from "@/components/core/Heading";
import "./DocsPage.css";

export const ComingSoon: React.FC = () => {
  const { component } = useParams<{ component: string }>();
  
  const componentName = component
    ? component.charAt(0).toUpperCase() + component.slice(1)
    : "Component";

  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">{componentName}</Heading>
      <p className="docs-page__description">
        This component is on our roadmap and documentation is coming soon.
      </p>
      
      <div style={{ 
        padding: "var(--spacing-xl)", 
        backgroundColor: "var(--background-surface)",
        borderRadius: "var(--radius-lg)",
        textAlign: "center",
        color: "var(--text-secondary)"
      }}>
        <span style={{ fontSize: "3rem" }}>🚧</span>
        <p style={{ marginTop: "var(--spacing-md)" }}>
          We&apos;re working on building and documenting the <strong>{componentName}</strong> component.
        </p>
      </div>
    </article>
  );
};
