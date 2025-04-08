# UI Automation Test (Playwright + TypeScript)

This project is an automated UI test using [Playwright](https://playwright.dev/) and TypeScript, created to verify eSIM package details on [Airalo website](https://www.airalo.com/).

## ✅ Test Scenario

The automated test covers the following user journey:

1. Open https://www.airalo.com/
2. In the search field on the home page, type "Japan" and select the Japan destination from the “Local” section in the autocomplete options.
3. On the next page, choose the first eSIM package.
4. Click on **Buy Now**
5. Verify the popup modal displays correct package details:
   - **Title**: Moshi Moshi
   - **Coverage**: Japan
   - **Data**: 1 GB
   - **Validity**: 7 days
   - **Price**: $4.50

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) for browser automation
- [TypeScript](https://www.typescriptlang.org/) for static typing
- [Node.js](https://nodejs.org/) for JavaScript runtime

