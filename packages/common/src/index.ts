import { ignoreFactory } from './factories/ignore-factory';

import type { Linter } from 'eslint';

export const common = (): Linter.FlatConfig[] => {
  return [
    ...ignoreFactory(),
  ];
};
