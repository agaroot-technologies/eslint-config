import type { Linter } from 'eslint';

export type Configurator<T = void> =
  T extends void
    ? (() => Linter.FlatConfig[]) | (() => Linter.FlatConfig)
    : ((options: T) => Linter.FlatConfig[]) | ((options: T) => Linter.FlatConfig);

export const define = <T>(configurators: Configurator<T>[]): Configurator<T> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return (options) => configurators.flatMap((configurator) => {
    return configurator(options);
  });
};
