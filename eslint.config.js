import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  prettierPlugin,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
    },
  },
];
