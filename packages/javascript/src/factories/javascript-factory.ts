import eslint from '@eslint/js';

import type { Linter } from 'eslint';

export const javascriptFactory = (): Linter.FlatConfig[] => {
  return [
    {
      name: 'eslint/recommended',
      ...eslint.configs.recommended,
    },
    {
      name: 'agaroot/javascript/rules',
      rules: {
        'func-style': ['error', 'expression'],
        'no-unused-vars': 'off',
        'prefer-arrow-callback': 'error',
      },
    },
  ];
};
