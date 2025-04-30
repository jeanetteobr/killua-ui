require('ts-node').register({
  compilerOptions: {
    module: 'ESNext',
    moduleResolution: 'node'
  }
});
require('../src/utils/colorContrast.test.ts'); 