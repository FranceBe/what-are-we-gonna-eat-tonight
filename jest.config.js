const { resolve } = require('path')
const baseDir = resolve(__dirname, '..')

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/server/*.{js,jsx}',
    '!src/**/stories/*',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coverageDirectory: `${resolve(baseDir)}/coverage`,
  coverageReporters: ['text', 'html'],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  roots: ['<rootDir>/src', '<rootDir>/storybook'],
  moduleNameMapper: {
  },
  setupFilesAfterEnv: [
  ],
  setupFiles: [
    // TODO : special config for storybook if needed
  ],
  testRegex: 'tests/.*\\.test\\.js$',
};
