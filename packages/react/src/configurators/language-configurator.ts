import type { Configurator } from '@agaroot/eslint-config-definer';

export const languageConfigurator: Configurator = () => {
  return [
    {
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    },
  ];
};
