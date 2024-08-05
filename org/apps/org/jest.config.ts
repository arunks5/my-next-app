
const esModules = [
  '@lit',
  '@lit/react',
  '@lit/reactive-element',
  'lit',
  'lit-html'
].join('|');

/* eslint-disable */
export default {
  displayName: 'org',
  preset: '../../jest.preset.js',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  transform: {
    // '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(ts|tsx)$':[ 'babel-jest',{"presets": ["@nrwl/next/babel"]}]

  },
  // testMatch: ['**/?(*.)+(spec|test).tsx'],
  coverageDirectory: '../../coverage/apps/org',
};

