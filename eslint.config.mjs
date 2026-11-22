import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts', 'src/app/info/components/**', 'src/app/skills/components/**', 'src/app/components/Header.js', 'src/app/components/Main.js']),
]);
