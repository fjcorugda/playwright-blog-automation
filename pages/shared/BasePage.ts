import { Page } from '@playwright/test';

export default class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(`http://127.0.0.1:5174${path}`);
  }
}