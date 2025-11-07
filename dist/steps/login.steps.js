import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';
let browser;
let context;
let page;
Given('I open the {string} page', async function (url) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    // 👇 FIX — stop TypeScript whining
    global.browser = browser;
    global.page = page;
});
When('I login with username {string} and password {string}', async function (username, password) {
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');
});
Then('I should see the title {string}', async function (expectedTitle) {
    const title = await page.title();
    expect(title).toBe(expectedTitle);
});
Then('I should see an error message {string}', async function (expectedError) {
    const actualError = await page.textContent('[data-test="error"]');
    expect(actualError?.trim()).toBe(expectedError);
    await browser.close();
});
