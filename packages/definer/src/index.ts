import type { Linter } from 'eslint';

export type Configurator<T = void> =
  T extends void
    ? () => Linter.FlatConfig | Linter.FlatConfig[]
    : (options: T) => Linter.FlatConfig | Linter.FlatConfig[];

export const define = <T>(configurators: Configurator<T>[]): (options: T) => Linter.FlatConfig[] => {
  return (options) => configurators.flatMap((configurator) => {
    return configurator(options);
  });
};
