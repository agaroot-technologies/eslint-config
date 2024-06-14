import type { Configurator } from '@agaroot/eslint-config-definer';

export const linterConfigurator: Configurator = () => {
  return [
    {
      name: 'agaroot/common/linter',
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
  ];
};
