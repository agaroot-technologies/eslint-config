import { ignoreFactory } from './factories/ignore-factory';
import { linterFactory } from './factories/linter-factory';

import type { Linter } from 'eslint';

export const common = (): Linter.FlatConfig[] => {
  return [
    ...ignoreFactory(),
    ...linterFactory(),
  ];
};
