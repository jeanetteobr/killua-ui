import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Please provide a component name. Example: npm run generate:component Badge");
  process.exit(1);
}

// Validate component name (PascalCase)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error("❌ Component name must be PascalCase (e.g., Badge, TextInput, IconButton)");
  process.exit(1);
}

const baseDir = path.resolve(__dirname, "../src/components/core", componentName);
const barrelPath = path.resolve(__dirname, "../src/components/core/index.ts");

if (fs.existsSync(baseDir)) {
  console.error("❌ Component already exists!");
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

// CSS class prefix (lowercase with hyphens)
const cssPrefix = `kui-${componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;

// index.tsx
fs.writeFileSync(
  path.join(baseDir, "index.tsx"),
  `import React from "react";
import type { ${componentName}Props } from "./${componentName}.types";
import './${componentName}.css';

export const ${componentName}: React.FC<${componentName}Props> = ({ 
  children, 
  className,
  ...props 
}) => {
  const classes = ['${cssPrefix}', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
`
);

// types
fs.writeFileSync(
  path.join(baseDir, `${componentName}.types.ts`),
  `import type { HTMLAttributes, ReactNode } from "react";

export interface ${componentName}Props extends HTMLAttributes<HTMLDivElement> {
  /** The content to be rendered inside the component */
  children?: ReactNode;
}
`
);

// CSS
fs.writeFileSync(
  path.join(baseDir, `${componentName}.css`),
  `/* ${componentName} Component Styles */

.${cssPrefix} {
  /* Base styles */
}
`
);

// Test file
fs.writeFileSync(
  path.join(baseDir, `${componentName}.test.tsx`),
  `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ${componentName} } from './index';

describe('${componentName}', () => {
  it('renders children correctly', () => {
    render(<${componentName}>Test content</${componentName}>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<${componentName} className="custom-class">Content</${componentName}>);
    const element = screen.getByText('Content');
    expect(element).toHaveClass('${cssPrefix}');
    expect(element).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<${componentName} data-testid="test-component">Content</${componentName}>);
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
  });
});
`
);

// Update barrel export
if (fs.existsSync(barrelPath)) {
  const barrelContent = fs.readFileSync(barrelPath, 'utf-8');
  const exportLine = `\nexport { ${componentName} } from './${componentName}';\nexport type { ${componentName}Props } from './${componentName}/${componentName}.types';\n`;
  
  // Only add if not already present
  if (!barrelContent.includes(`export { ${componentName} }`)) {
    fs.appendFileSync(barrelPath, exportLine);
    console.log(`📦 Updated barrel export in components/core/index.ts`);
  }
}

console.log(`✅ Created component: ${componentName}`);
console.log(`   📁 ${baseDir}`);
console.log(`   ├── index.tsx`);
console.log(`   ├── ${componentName}.types.ts`);
console.log(`   ├── ${componentName}.css`);
console.log(`   └── ${componentName}.test.tsx`);
