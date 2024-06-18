import { define } from '@agaroot/eslint-config-definer';

import { importConfigurator } from './configurators/import-configurator';
import { typescriptConfigurator } from './configurators/typescript-configurator';

export const typescript = define([
  importConfigurator,
  typescriptConfigurator,
]);
