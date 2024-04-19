import eslintPluginImportX from 'eslint-plugin-import-x';

import type { Linter } from 'eslint';

export type ImportFactoryOptions = {
  tsconfigPath: string;
};

export const importFactory = (options: ImportFactoryOptions): Linter.FlatConfig[] => {
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
