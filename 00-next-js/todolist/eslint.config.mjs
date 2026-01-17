import { defineConfig } from 'eslint/config';
import eslintNextPlugin from '@next/eslint-plugin-next';

const eslintConfig = defineConfig([
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
    parser: '@typescript-eslint/parser',
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      next: eslintNextPlugin,
    },
  },
]);

export default eslintConfig;
