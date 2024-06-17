import { define } from '@agaroot/eslint-config-definer';

import { jestDomConfigurator } from './configurators/jest-dom-configurator';
import { testingLibraryConfigurator } from './configurators/testing-library-configurator';

export const jestReact = define([
  jestDomConfigurator,
  testingLibraryConfigurator,
]);
