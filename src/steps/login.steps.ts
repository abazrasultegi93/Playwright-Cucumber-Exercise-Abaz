import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import type { Browser, Page, BrowserContext } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Given('I open the {string} page', async function (url: string) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);

    // 👇 FIX — stop TypeScript whining
    (global as any).browser = browser;
    (global as any).page = page;
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');
});

Then('I should see the title {string}', async function (expectedTitle: string) {
    const title = await page.title();
    expect(title).toBe(expectedTitle);
});

Then('I should see an error message {string}', async function (expectedError: string) {
    const actualError = await page.textContent('[data-test="error"]');
    expect(actualError?.trim()).toBe(expectedError);
    await browser.close();
});
