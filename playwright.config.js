const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://localhost:4173',
    headless: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],

  webServer: {
    command: 'npx serve . -l 4173',
    port: 4173,
    reuseExistingServer: true
  }
});