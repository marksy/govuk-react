// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/{components,packages}/*/src/**.[jt]s?(x)',
    '<rootDir>/{components,packages}/*/src/**/*.[jt]s?(x)',
    '!<rootDir>/{components,packages}/*/src/**/{stories,example,fixtures}.[jt]s?(x)',
    '!<rootDir>/packages/storybook/**',
    '!<rootDir>/packages/api-docs/**',
    '!<rootDir>/packages/storybook-components/**',
  ],
  coverageDirectory: './coverage/',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.js'],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/{components,packages}/*/src/**/?(*.)(spec|test).js?(x)',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
};
