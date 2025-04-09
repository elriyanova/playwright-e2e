# Playwright Test Automation

This repository contains automated test scripts for both UI and API testing using Playwright + TypeScript language. The tests cover the Airalo application for verifying eSIM package details and interacting with the Airalo Partner API.

## Prerequisites
Before running the tests, make sure you have the following:
- [Node.js](https://nodejs.org/) installed (v14 or above recommended).
- [Git](https://git-scm.com/)

## Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/your-repo/playwright-tests.git
cd playwright-e2e
```
2. Install the dependencies:
```bash
npm install
```
3. Install Playwright and required browsers:
```bash
npx playwright install
```
## Run all tests (UI + API)
```bash
npx playwright test
```
## Running UI Tests
```bash
npm run test:ui
```
## Running API Tests
```bash
npm run test:api
```
## Show report with test results
```bash
npx playwright show-report
```
## GitHub Actions for CI

This repository uses GitHub Actions to automate running Playwright tests for both UI and API on every code change or pull request. This helps ensure the application behaves correctly and all tests pass before any changes are merged.

How it works:
The GitHub Actions workflow is triggered on push or pull_request events for the main branche. The workflow runs Playwright tests in the following order:

1. Checkout the code: The latest code is pulled from the repository.
2. Set up node.js: The node.js environment is set up with the LTS version.
3. Install dependencies: Dependencies are installed using npm ci to ensure a clean and reproducible environment.
4. Install Chromium browser: The Chromium browser required for running Playwright tests is installed along with any necessary dependencies.
5. Run UI tests: The UI tests are executed using the npm run test:ui script.
6. Run API tests: The API tests are executed using the npm run test:api script.
7. Upload test results: After the tests are completed, the test reports are uploaded as an artifact for easy inspection.