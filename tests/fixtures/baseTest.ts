import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// Define the types for our fixtures
type MyFixtures = {
  homePage: HomePage;
};

// Extend the base test to include our Page Objects
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo('/');
    await use(homePage);
  },
});

export { expect } from '@playwright/test';