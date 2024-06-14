import process from 'node:process';

import tseslint from 'typescript-eslint';

import type { Configurator } from '@agaroot/eslint-config-definer';
import type { Linter } from 'eslint';

export type TypescriptConfiguratorOptions = {
  tsconfigPath: string;
};

export const typescriptConfigurator: Configurator<TypescriptConfiguratorOptions> = options => {
  return [
    ...tseslint.config(
      ...tseslint.configs.recommendedTypeChecked,
    ) as Linter.FlatConfig[],
    {
      name: 'agaroot/typescript/parser',
      languageOptions: {
        parserOptions: {
          project: options.tsconfigPath,
          tsconfigRootDir: process.cwd(),
        },
      },
    },
    {
      name: 'agaroot/typescript/rules',
      rules: {
        '@typescript-eslint/consistent-type-imports': ['error', {
          'prefer': 'type-imports',
        }],
        '@typescript-eslint/no-misused-promises': ['error', {
          'checksVoidReturn': {
            'attributes': false,
          },
        }],
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      name: 'agaroot/typescript/rules/test',
      files: [
        '*.test.{ts,tsx}',
        '**/__tests__/**/*.{ts,tsx}',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
      },
    },
  ];
};
