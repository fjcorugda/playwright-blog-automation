import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

type MyFixtures = {
  homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    homePage.navigateTo('/');
    await use(homePage);
  },
});

export { expect } from '@playwright/test';