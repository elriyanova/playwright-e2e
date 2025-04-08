import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { EsimPage } from '../pages/ESIMPage';
import { JapanPackageDetails } from '../data/CountryPackageDetails';

test('Verify eSIM package details', async ({ page }) => {
  const home = new HomePage(page);
  const esim = new EsimPage(page);

  await test.step('Navigate to the home page', async () => {
    await home.navigate();
  });

  await test.step('Search for Japan', async () => {
    await home.searchForOption('Japan');
  });

  await test.step('Click on "Buy Now" for the first eSIM package', async () => {
    await esim.buyNow();
  });

  await test.step('Verify the package details in the popup', async () => {
    // Log the text inside the elements for debugging
    const operatorTitleText = await esim.operatorTitle.innerText();
    const coverageValueText = await esim.coverageValue.innerText();
    const dataValueText = await esim.dataValue.innerText();
    const validityValueText = await esim.validityValue.innerText();
    const priceValueText = await esim.priceValue.innerText();

    console.log('Operator Title:', operatorTitleText);
    console.log('Coverage:', coverageValueText);
    console.log('Data:', dataValueText);
    console.log('Validity:', validityValueText);
    console.log('Price:', priceValueText);

    await expect(esim.operatorTitle).toHaveText(JapanPackageDetails.TITLE);
    await expect(esim.coverageValue).toHaveText(JapanPackageDetails.COVERAGE);
    await expect(esim.dataValue).toHaveText(JapanPackageDetails.DATA);
    await expect(esim.validityValue).toHaveText(JapanPackageDetails.VALIDITY);
    await expect(esim.priceValue).toHaveText(JapanPackageDetails.PRICE);
  });
});
