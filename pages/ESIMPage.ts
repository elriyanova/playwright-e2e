import { Locator, Page, expect } from '@playwright/test';

export enum PackageDetails {
    TITLE = 'Moshi Moshi',
    COVERAGE = 'Japan',
    DATA = '1 GB',
    VALIDITY = '7 Days',
    PRICE = '4.50 €',
  }

export class EsimPage {
  readonly page: Page;
  readonly firstEsimPackage: Locator;
  readonly buyNowButton: Locator;
  readonly popup: Locator;
  readonly operatorTitle: Locator;
  readonly coverageValue: Locator;
  readonly dataValue: Locator;
  readonly validityValue: Locator;
  readonly priceValue: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.firstEsimPackage = page.locator('data-testid=sim-package-item').filter({
        hasNot: page.locator('div', { hasText: 'Free Welcome eSIM' }),}).first();
    this.buyNowButton = this.firstEsimPackage.getByRole('button', { name: /buy now/i });
    this.popup = page.locator('data-testid=package-detail');
    this.operatorTitle = this.popup.locator('[data-testid="sim-detail-operator-title"]');
    this.coverageValue = this.popup.locator('[data-testid="COVERAGE-value"]');
    this.dataValue = this.popup.locator('[data-testid="DATA-value"]');
    this.validityValue = this.popup.locator('[data-testid="VALIDITY-value"]');
    this.priceValue = this.popup.locator('[data-testid="PRICE-value"]');
  }

  async buyNow() {
    await expect(this.buyNowButton).toBeVisible();
    await this.buyNowButton.click();
  }
}
