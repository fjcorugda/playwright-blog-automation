import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {
  readonly titleInput = this.page.locator('#title');
  readonly contentInput = this.page.locator('#content');
  readonly submitBtn = this.page.locator('#submit');
  readonly postList = this.page.locator('#posts');

  async createPost(title: string, content: string) {
    await this.titleInput.fill(title);
    await this.contentInput.fill(content);
    await this.submitBtn.click();
  }

  async verifyPostExists(title: string) {
    await expect(this.postList).toContainText(title);
  }
}