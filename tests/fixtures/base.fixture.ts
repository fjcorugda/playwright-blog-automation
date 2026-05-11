import { test as base } from '@playwright/test';
import LoginPage from '../../pages/auth/LoginPage';
import BlogPage from '../../pages/blog/BlogPage';

type Fixtures = {
  loginPage: LoginPage;
  blogPage: BlogPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  blogPage: async ({ page }, use) => {
    await use(new BlogPage(page));
  }
});

export { expect } from '@playwright/test';