const config = {
  testEnvironment: 'jest-environment-jsdom',
  testURL: 'http://localhost',
  testMatch: ['**/src/**/*.test.js'],
  verbose: true,
  bail: true,
  transform: {
    '.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  modulePaths: ['<rootDir>'],
  // coveragePathIgnorePatterns: [
  //   'coverage',
  //   'store',
  // ],
  modulePathIgnorePatterns: [
    'store/actions',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
};

module.exports = config;
