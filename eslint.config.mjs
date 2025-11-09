import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1️⃣ Ignore patterns must be defined in a standalone config object
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'vibecode-starters/**', // ✅ This now works properly
    ],
  },

  // 2️⃣ Extend your normal configs AFTER the ignore block
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // 3️⃣ Add your custom rule overrides
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
    },
  },
];

export default eslintConfig;
