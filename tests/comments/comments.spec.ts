import { test, expect } from '../fixtures/base.fixture';

test('@regression submit valid comment', async ({
  page
}) => {
  // await page.goto('/blog/1');
  await page.goto('http://127.0.0.1:5174/blog/1');

  await page
    .getByTestId('comment-input')
    .fill('Great article');

  await page
    .getByTestId('submit-comment')
    .click();

  await expect(
    page.getByText('Great article')
  ).toBeVisible();
});