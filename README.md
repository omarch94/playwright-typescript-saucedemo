# Playwright TypeScript E2E Automation Framework

A practical end-to-end test automation framework built with **Playwright** and **TypeScript**, using the **Page Object Model (POM)** design pattern.

The project automates real user workflows against the [SauceDemo](https://www.saucedemo.com/) application and is being developed progressively as part of my journey toward advanced Playwright QA Automation.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Git & GitHub
- Chromium
- Firefox
- WebKit

---

## Project Structure

```text
playwright-typescript-saucedemo/
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── CheckoutOverview.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── cart2.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.ts
```

---

## Test Coverage

### Authentication

- Login with valid credentials
- Login with invalid credentials
- Validate successful navigation after authentication
- Validate login error messages

### Inventory

- Locate products dynamically
- Add products to the shopping cart
- Add multiple products
- Validate shopping cart badge count

### Shopping Cart

- Open the shopping cart
- Verify selected products are present
- Handle products dynamically using reusable locators
- Proceed to checkout

### Checkout

- Validate the checkout information page
- Enter customer information
- Continue to checkout overview
- Verify products remain present during checkout
- Finish the order
- Validate successful order completion

---

## End-to-End Scenario

The main automated business flow covers:

```text
Login
  ↓
Inventory
  ↓
Add Sauce Labs Backpack
  ↓
Add Sauce Labs Bike Light
  ↓
Verify Cart Count
  ↓
Open Cart
  ↓
Verify Products
  ↓
Proceed to Checkout
  ↓
Enter Customer Information
  ↓
Checkout Overview
  ↓
Verify Products
  ↓
Finish Order
  ↓
Order Confirmation
```

---

## Page Object Model

The framework uses the Page Object Model to separate test scenarios from UI implementation details.

For example, tests can perform:

```ts
await inventoryPage.addProductToCart('Sauce Labs Backpack');
await inventoryPage.openCart();
```

instead of repeatedly containing selectors and low-level browser interactions.

A reusable product locator can also be exposed by a Page Object:

```ts
getProduct(productName: string): Locator {
  return this.products.filter({
    hasText: productName
  });
}
```

This keeps tests readable while allowing the same implementation to work with different products.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/omarch94/playwright-typescript-saucedemo.git
```

### 2. Enter the project

```bash
cd playwright-typescript-saucedemo
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests using Chromium:

```bash
npx playwright test --project=chromium
```

Run Firefox:

```bash
npx playwright test --project=firefox
```

Run WebKit:

```bash
npx playwright test --project=webkit
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run Playwright UI Mode:

```bash
npx playwright test --ui
```

---

## HTML Report

The project uses Playwright's HTML reporter.

After executing the tests:

```bash
npx playwright show-report
```

---

## Debugging

Run a test using Playwright Inspector:

```bash
npx playwright test --debug
```

Run with tracing enabled:

```bash
npx playwright test --trace on
```

The project uses Playwright traces to help investigate failed tests and understand browser state at the time of failure.

---

## Cross-Browser Testing

The framework currently executes against:

| Browser | Playwright Project |
|---|---|
| Chromium | `chromium` |
| Firefox | `firefox` |
| WebKit | `webkit` |

Browser projects are configured through `playwright.config.ts`.

---

## Playwright Configuration

The framework uses `playwright.config.ts` for shared execution configuration including:

- Test directory
- Base URL
- Parallel execution
- CI retries
- Workers
- HTML reporting
- Trace collection
- Browser projects

Using `baseURL` allows Page Objects to navigate using relative URLs rather than hardcoding the environment URL throughout the framework.

---

## Key Concepts Demonstrated

This project currently demonstrates:

- Playwright Test
- TypeScript
- Page Object Model
- Playwright Locators
- Locator filtering
- Locator chaining
- Web-first assertions
- Auto-waiting
- Strict-mode debugging
- `Locator` vs `Promise<Locator>`
- TypeScript classes
- Constructors
- `readonly` properties
- Reusable methods
- Dynamic product selection
- `async` / `await`
- Cross-browser testing
- Playwright configuration
- `baseURL`
- HTML reports
- Playwright Inspector
- Trace Viewer
- Git version control

---

## Roadmap

The project will continue evolving with:

- Custom Playwright fixtures
- Test hooks
- Authentication state reuse
- Test data management
- Environment-specific configuration
- API testing
- UI + API testing
- Network interception and mocking
- File upload/download testing
- Accessibility testing
- Visual regression testing
- Advanced reporting
- GitHub Actions CI/CD
- Parallel CI execution
- Docker
- Additional real-world test scenarios

---

## Current Status

**Framework milestone: Step 8 completed**

Current capabilities include:

- Page Object Model
- Reusable page interactions
- Dynamic product handling
- Full checkout E2E automation
- Cross-browser execution
- Debugging and tracing
- Git/GitHub version control

The next framework milestone introduces **custom Playwright fixtures** to improve dependency management and remove repeated Page Object initialization from tests.