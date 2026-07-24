import { test, expect } from '../fixtures/base.fixture';

test('@smoke navigate to blog page', async ({ page }) => {
  await page.goto('/blog');
  await page.getByRole('link', {name: 'Blog'}).click();
  await expect(page).toHaveURL(/\/blog$/);
}); 