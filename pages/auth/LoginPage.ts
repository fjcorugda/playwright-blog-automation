import { Page } from '@playwright/test';
import BasePage from '../shared/BasePage';

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  usernameInput = () =>
    this.page.getByTestId('username-input');

  passwordInput = () =>
    this.page.getByTestId('password-input');

  loginButton = () =>
    this.page.getByTestId('login-button');

  loginError = () =>
    this.page.getByTestId('login-error');

  async login(username: string, password: string) {
    await this.goto('/login');

    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);

    await this.loginButton().click();
  }
}