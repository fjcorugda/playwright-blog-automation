// import { test, expect } from '../fixtures/base.fixture';

// test('@smoke navigate to blog page', async ({
//   page
// }) => {
//   await page.goto('http://127.0.0.1:5174/blog');

//   await page.getByRole('link', {
//     name: 'Blog'
//   }).click();

//   await expect(page).toHaveURL('http://127.0.0.1:5174/blog');
// });

import { test, expect } from '../fixtures/base.fixture';

test('@smoke navigate to blog page', async ({ page }) => {
  await page.goto('/blog');
  await page.getByRole('link', {name: 'Blog'}).click();
  await expect(page).toHaveURL(/\/blog$/);
}); 