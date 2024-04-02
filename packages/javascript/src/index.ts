import { globalsFactory } from './factories/globals-factory';
import { javascriptFactory } from './factories/javascript-factory';

import type { Linter } from 'eslint';

export const javascript = (): Linter.FlatConfig[] => {
  return [
    ...globalsFactory(),
    ...javascriptFactory(),
  ];
};
