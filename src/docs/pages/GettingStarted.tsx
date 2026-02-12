import React from "react";
import { Heading } from "@/components/core/Heading";
import "./DocsPage.css";

export const GettingStarted: React.FC = () => {
  return (
    <article className="docs-page">
      <Heading level={1} size="2xl">Getting Started</Heading>
      
      <p className="docs-page__intro">
        Welcome to <strong>Killua UI</strong> — a lightning-fast, modern React component 
        library inspired by Killua Zoldyck from Hunter x Hunter. Built for speed, 
        precision, accessibility, and elegance.
      </p>

      <section className="docs-page__section">
        <Heading level={2} size="lg">Installation</Heading>
        <pre className="docs-page__code">
          <code>npm install killua-ui</code>
        </pre>
      </section>

      <section className="docs-page__section">
        <Heading level={2} size="lg">Quick Start</Heading>
        <pre className="docs-page__code">
          <code>{`import { Button, Heading } from 'killua-ui';

function App() {
  return (
    <div>
      <Heading level={1}>Hello, Killua UI!</Heading>
      <Button variant="primary">Get Started</Button>
    </div>
  );
}`}</code>
        </pre>
      </section>

      <section className="docs-page__section">
        <Heading level={2} size="lg">Features</Heading>
        <ul className="docs-page__list">
          <li><strong>Lightweight & Modular</strong> — Import only what you need</li>
          <li><strong>Accessible</strong> — WCAG compliant, keyboard-friendly</li>
          <li><strong>Themeable</strong> — Dark/light mode with system detection</li>
          <li><strong>TypeScript</strong> — Fully typed components</li>
          <li><strong>Modern React</strong> — Built for React 19+</li>
        </ul>
      </section>

      <section className="docs-page__section">
        <Heading level={2} size="lg">Design Tokens</Heading>
        <p>
          Killua UI uses a comprehensive design token system for colors, typography, 
          spacing, and more. All tokens are available as CSS variables for easy customization.
        </p>
      </section>
    </article>
  );
};
