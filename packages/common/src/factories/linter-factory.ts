import type { Linter } from 'eslint';

export const linterFactory = (): Linter.FlatConfig[] => {
  return [
    {
      name: 'agaroot/common/linter',
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
  ];
};
