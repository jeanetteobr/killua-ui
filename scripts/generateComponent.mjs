import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Please provide a component name. Example: pnpm generate-component Badge");
  process.exit(1);
}

const baseDir = path.resolve(__dirname, "../src/components/core", componentName);
if (fs.existsSync(baseDir)) {
  console.error("❌ Component already exists!");
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

// index.tsx
fs.writeFileSync(
  path.join(baseDir, "index.tsx"),
  `import React from "react";
import type { ${componentName}Props } from "./${componentName}.types";

export const ${componentName}: React.FC<${componentName}Props> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
`
);

// types
fs.writeFileSync(
  path.join(baseDir, `${componentName}.types.ts`),
  `export type ${componentName}Props = {
  children?: React.ReactNode;
  // Add your props here
} & React.HTMLAttributes<HTMLDivElement>;
`
);

console.log(`✅ Created component: ${componentName}`);
