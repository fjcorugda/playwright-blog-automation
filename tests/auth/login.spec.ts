import { test, expect } from '../fixtures/base.fixture';

test('@smoke valid login', async ({ loginPage, page }) => {
  await loginPage.login(
    'testuser',
    'Password123'
  );
  await expect(page).toHaveURL(/\/$/);
});

test('@regression invalid login', async ({ loginPage}) => {
  await loginPage.login(
    'wrong',
    'wrong'
  );

  await expect(
    loginPage.loginError()
  ).toBeVisible();
});