import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Blog Functionality', () => {

 test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  }); 

  test('should allow a user to create a new blog post', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.createPost(
      'My First Blog',
      'This is a test blog content'
    );

    await expect(page.getByText('My First Blog')).toBeVisible();
  });

  test('should display existing posts on load', async ({ page }) => {
    await expect(page.locator('[data-testid^="article-card-"]')).toHaveCount(2);
  });

});