// const config = {
//   preset: "jest-puppeteer",
//   collectCoverage: true,
//   collectCoverageFrom: ["src/**/*"],
//   coverageReporters: ["text", "lcov", "cobertura"],
//   setupFilesAfterEnv: ["jest-puppeteer-istanbul/lib/setup"],
//   reporters: ["default", "jest-puppeteer-istanbul/lib/reporter"],
//   coverageDirectory: "coverage",
// };
// module.exports = config;

const config = {
  preset: "jest-puppeteer",
  globalSetup: "./setup.js",
  globalTeardown: "./teardown.js",
  testEnvironment: "./puppeteer_environment.js",
  testTimeout: 120000,
};

module.exports = config;
