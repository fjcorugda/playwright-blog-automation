import { test, expect } from '../fixtures/baseTest';

test.describe('Blog Functionality', () => {
  
  test('should allow a user to create a new blog post', async ({ homePage }) => {
    const testTitle = 'Senior QA Test Post';
    const testContent = 'Testing the automation architecture.';

    await homePage.createPost(testTitle, testContent);
    await homePage.verifyPostExists(testTitle);
  });

  test('should display existing posts on load', async ({ homePage }) => {
    // We can check for the default mock posts
    await homePage.verifyPostExists('Hello World');
  });
});