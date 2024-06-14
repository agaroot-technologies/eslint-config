import eslintPluginImportX from 'eslint-plugin-import-x';

import type { Configurator } from '@agaroot/eslint-config-definer';

export type ImportConfiguratorOptions = {
  tsconfigPath: string;
};

export const importConfigurator: Configurator<ImportConfiguratorOptions> = options => {
  return [
    {
      name: 'import-x/typescript',
      ...eslintPluginImportX.configs.typescript,
    },
    {
      name: 'agaroot/typescript/import/settings',
      settings: {
        'import-x/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts', ".js", ".mjs"],
        },
        'import-x/resolver': {
          typescript: {
            project: options.tsconfigPath,
          },
        },
      },
    },
  ];
};
