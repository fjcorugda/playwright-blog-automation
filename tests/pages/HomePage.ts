import { Page, Locator } from '@playwright/test';

export class HomePage {
  navigateTo(arg0: string) {
    throw new Error('Method not implemented.');
  }
  readonly page: Page;
  readonly titleInput: Locator;
  readonly contentInput: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.titleInput = page.getByTestId('title-input');
    this.contentInput = page.getByTestId('content-input');
    this.submitBtn = page.getByTestId('submit-button');
  }

  async createPost(title: string, content: string) {
    await this.titleInput.fill(title);
    await this.contentInput.fill(content);
    await this.submitBtn.click();
  }
}