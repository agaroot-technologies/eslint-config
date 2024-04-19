import { importFactory} from './factories/import-factory';
import { typescriptFactory } from './factories/typescript-factory';

import type { ImportFactoryOptions } from './factories/import-factory';
import type { TypescriptFactoryOptions } from './factories/typescript-factory';
import type { Linter } from 'eslint';

export type TypeScriptOptions = (
  | ImportFactoryOptions
  | TypescriptFactoryOptions
);

export const typescript = (options: TypeScriptOptions): Linter.FlatConfig[] => {
  return [
    ...importFactory(options),
    ...typescriptFactory(options),
  ];
};
