import g from 'globals';

import { files } from '../files';

import type { Configurator } from '@agaroot/eslint-config-definer';

export const globalsConfigurator: Configurator = () => {
  return [
    {
      name: 'agaroot/jest/globals',
      files,
      languageOptions: {
        globals: {
          ...g.jest,
        },
      },
    },
  ];
};
