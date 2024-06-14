import g from 'globals';

import type { Configurator } from '@agaroot/eslint-config-definer';

export const globalsConfigurator: Configurator = () => {
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
