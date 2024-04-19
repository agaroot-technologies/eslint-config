import eslintPluginImportX from 'eslint-plugin-import-x';

import type { ESLint, Linter } from 'eslint';

export const importFactory = (): Linter.FlatConfig[] => {
  return [
    {
      name: 'import-x/recommended',
      plugins: {
        'import-x': eslintPluginImportX as unknown as ESLint.Plugin,
      },
      rules: eslintPluginImportX.configs.recommended.rules,
      languageOptions: {
        parserOptions: eslintPluginImportX.configs.recommended.parserOptions,
      },
    },
    {
      name: 'agaroot/javascript/import/rules',
      rules: {
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import-x/newline-after-import': ['error', {
          'count': 1,
        }],
        'import-x/no-unresolved': 'off',
        'import-x/order': ['error', {
          'groups': ['builtin', 'external', 'internal', ['index', 'parent', 'sibling'], 'object', 'type'],
          'newlines-between': 'always',
          'pathGroupsExcludedImportTypes': ['builtin'],
          'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
        }],
      },
    },
  ];
};
