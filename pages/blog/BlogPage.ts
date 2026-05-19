import { Page } from '@playwright/test';
import BasePage from '../shared/BasePage';

export default class BlogPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  articleCard = (id: number) =>
    this.page.getByTestId(`article-card-${id}`);

  articleLink = (id: number) =>
    this.page.getByTestId(`article-link-${id}`);
}