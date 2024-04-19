import { typescriptFactory } from './factories/typescript-factory';

import type { TypescriptFactoryOptions } from './factories/typescript-factory';
import type { Linter } from 'eslint';

export type TypeScriptOptions = TypescriptFactoryOptions;

export const typescript = (options: TypeScriptOptions): Linter.FlatConfig[] => {
  return [
    ...typescriptFactory(options),
  ];
};
