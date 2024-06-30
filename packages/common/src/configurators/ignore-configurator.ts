import type { Configurator } from '@agaroot/eslint-config-definer';

export const ignoreConfigurator: Configurator = () => {
  return [
    {
      name: 'agaroot/common/ignore',
      ignores: [
        // Node modules
        '**/node_modules',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',

        // Test directories
        '**/coverage',
        '**/__snapshots__',

        // Build directories
        '**/dist',
        '**/.next',
        '**/.vercel',

        // Cache directories
        '**/.swc',
        '**/.turbo',
      ],
    },
  ];
};
