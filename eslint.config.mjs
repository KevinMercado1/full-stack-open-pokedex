import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';

export default defineConfig([
  { ignores: ['dist/**'] },
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ['**/*.jest.spec.{js,jsx}', '**/test/**/*.{js,jsx}'],
    languageOptions: { globals: { ...globals.jest } },
    plugins: { jest: pluginJest },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  pluginReact.configs.flat.recommended,
]);
