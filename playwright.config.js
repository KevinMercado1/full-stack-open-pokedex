const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests/e2e',
  testMatch: '**/*.spec.js',
  timeout: 30000,
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    baseURL: 'http://localhost:8080',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm start',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
});
