import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/assert.ts',
    'src/check.ts',
    'src/index.ts',
    'src/run.ts',
    'src/util.ts',
  ],
  bundle: false,
  splitting: false,
  format: ['cjs', 'esm'],
  outExtension: ({ format }) => {
    let extensionName: string;

    switch (format) {
      case 'cjs': {
        extensionName = '.cjs';
        break;
      }

      case 'esm': {
        extensionName = '.mjs';
        break;
      }

      case 'iife': {
        extensionName = '.iife.js';
        break;
      }
    }

    return { js: extensionName };
  },
  tsconfig: 'tsconfig.lib.json',
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist/guardx',
});
