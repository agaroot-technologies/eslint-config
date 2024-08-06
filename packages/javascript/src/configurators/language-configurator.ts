import type { Configurator } from '@agaroot/eslint-config-definer';

export const languageConfigurator: Configurator = () => {
  return [
    {
      name: 'agaroot/javascript/language',
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
      },
    },
  ];
};
