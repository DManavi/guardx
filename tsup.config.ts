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
  tsconfig: 'tsconfig.lib.json',
  sourcemap: true,
  clean: true,
  outDir: 'dist/guardx',
});
