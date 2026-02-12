import React, { useState } from "react";
import "./Example.css";

interface ExampleProps {
  /** Title for this example section */
  title?: string;
  /** Description of what the example demonstrates */
  description?: string;
  /** The code snippet to display */
  code?: string;
  /** Whether to show in both light and dark modes */
  showModes?: boolean;
  /** The live component example */
  children: React.ReactNode;
}

export const Example: React.FC<ExampleProps> = ({
  title,
  description,
  code,
  showModes = false,
  children,
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="docs-example">
      {title && <h3 className="docs-example__title">{title}</h3>}
      {description && <p className="docs-example__description">{description}</p>}
      
      {showModes ? (
        <div className="docs-example__modes">
          <div className="docs-example__preview docs-example__preview--dark">
            <span className="docs-example__mode-label">Dark</span>
            {children}
          </div>
          <div className="docs-example__preview docs-example__preview--light light-theme">
            <span className="docs-example__mode-label">Light</span>
            {children}
          </div>
        </div>
      ) : (
        <div className="docs-example__preview">
          {children}
        </div>
      )}
      
      {code && (
        <>
          <button
            className="docs-example__toggle"
            onClick={() => setShowCode(!showCode)}
            aria-expanded={showCode}
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
          
          {showCode && (
            <pre className="docs-example__code">
              <code>{code}</code>
            </pre>
          )}
        </>
      )}
    </div>
  );
};
