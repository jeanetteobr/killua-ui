import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pageName = process.argv[2];

if (!pageName) {
  console.error("❌ Please provide a page name. Example: pnpm run generate-page CoreComponents");
  process.exit(1);
}

const baseDir = path.resolve(__dirname, "../src/pages", pageName);

if (fs.existsSync(baseDir)) {
  console.error("❌ Page already exists!");
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

// index.tsx
fs.writeFileSync(
  path.join(baseDir, "index.tsx"),
  `import React from "react";
import type { ${pageName}Props } from "./${pageName}.types";

export const ${pageName}: React.FC<${pageName}Props> = () => {
  return (
    <main style={{ padding: "var(--spacing-lg)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: "var(--font-weight-bold)", marginBottom: "var(--spacing-lg)" }}>
        ${pageName}
      </h1>
      {/* Add your page content here */}
    </main>
  );
};
`
);

// types
fs.writeFileSync(
  path.join(baseDir, `${pageName}.types.ts`),
  `export type ${pageName}Props = {
  // Define page props here if needed
};
`
);

console.log(`✅ Created page: ${pageName}`);
