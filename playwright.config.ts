import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// FIX: Since config is now in ROOT, we look inside the 'config/env' folder
dotenv.config({
  path: process.env.CI
    ? path.resolve(__dirname, 'config/env/.env.ci')
    : path.resolve(__dirname, 'config/env/.env.local')
});

export default defineConfig({
  // FIX: Since config is in ROOT, tests are in './tests'
  testDir: './tests',

  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    // Use the env variable or fallback to localhost
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:5174',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10000,
    navigationTimeout: 15000
  },

  webServer: {
    command: 'cd app && npm run dev',
    url: 'http://127.0.0.1:5174',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    stdout: 'pipe',
    stderr: 'pipe',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});