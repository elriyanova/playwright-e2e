import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly japanOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('data-testid=search-input');
  }

  async navigate() {
    await this.page.goto('/');
  }
  

  async searchForJapan() {
    await this.searchInput.click();
    await this.searchInput.fill('Japan');
    await this.japanOption.waitFor({ state: 'visible' });
    await this.japanOption.click();
  }

  async searchForOption(country: string) {
    await this.searchInput.click();
    await this.searchInput.fill(country);
    const optionLocator = this.page.locator(`data-testid=${country}-name`);
    await optionLocator.waitFor({ state: 'visible' });
    await optionLocator.click();
  }
}
