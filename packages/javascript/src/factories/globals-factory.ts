import g from 'globals';

import type { Linter } from 'eslint';

export const globalsFactory = (): Linter.FlatConfig[] => {
  return [
    {
      name: 'agaroot/javascript/globals',
      languageOptions: {
        globals: {
          ...g.browser,
          ...g.es2021,
          ...g.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
      },
    },
  ];
};
