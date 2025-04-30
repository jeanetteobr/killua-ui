import { createRequire } from 'module';
const require = createRequire(import.meta.url);

async function main() {
  const { register } = require('ts-node');
  
  register({
    compilerOptions: {
      module: 'ESNext',
      moduleResolution: 'node'
    }
  });

  await import('../src/utils/colorContrast.test.ts');
}

main().catch(console.error); 