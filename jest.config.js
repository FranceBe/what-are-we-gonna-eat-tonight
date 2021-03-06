const baseDir = __dirname

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
      branches: 95,
      functions: 82,
      lines: 89,
      statements: 89,
    },
  },
  coverageDirectory: `${baseDir}/coverage`,
  coverageReporters: ['text', 'html'],
  moduleDirectories: [
    'node_modules',
    'src',
    'storybook',
  ],
  rootDir: `${baseDir}`,
  roots: [`${baseDir}/src`, `${baseDir}/storybook`],
  moduleNameMapper: {
    '\\.(jpg|png|jpeg)$': `${baseDir}/utils/__mocks__/JPG_PNG.stub.js`,
    '\\.(ttf|woff|woff2)$': `${baseDir}/utils/__mocks__/fonts.stub.js`,
    '\\.svg$': `${baseDir}/src/utils/__mocks__/svg.stub.js`,
    '^assets/(.*)$': `${baseDir}/assets/$1`,
  },
  setupFilesAfterEnv: [
    `${baseDir}/jest.setup.js`,
  ],
  setupFiles: [`${baseDir}/storybook/jest.setup.js`],
  testRegex: '__tests__/.*\\.test\\.js$',
}
