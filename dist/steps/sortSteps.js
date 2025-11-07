import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";
let browser;
let page;
Given("I am logged in and on the Products page", async function () {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    globalThis.page = page;
    globalThis.browser = browser;
    await page.goto("https://www.saucedemo.com/");
    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");
    await page.click('[data-test="login-button"]');
    await page.waitForURL("**/inventory.html");
});
When("I sort products by {string}", async function (sortType) {
    await page.waitForSelector(".product_sort_container");
    // Retrieve options
    const options = await page.$$eval(".product_sort_container option", (els) => els.map((el) => ({
        value: el.getAttribute("value"),
        label: (el.textContent || "").trim().toLowerCase(),
    })));
    // Map label keywords to known values
    const map = {
        "name (a to z)": "az",
        "name (z to a)": "za",
        "price (low to high)": "lohi",
        "price (high to low)": "hilo",
    };
    const key = sortType.toLowerCase();
    const targetValue = Object.entries(map).find(([label]) => key.includes(label))?.[1];
    if (!targetValue) {
        throw new Error(`❌ Unknown sort type "${sortType}". Available: ${Object.keys(map).join(", ")}`);
    }
    await page.selectOption(".product_sort_container", { value: targetValue });
});
-Then("products should be sorted in {string} order by {string}", async function (direction, sortType) {
    const isAscending = direction.toLowerCase().includes("asc");
    if (sortType.toLowerCase().includes("price")) {
        const prices = await page.$$eval(".inventory_item_price", (els) => els.map((el) => parseFloat(el.textContent.replace("$", ""))));
        const sorted = [...prices].sort((a, b) => (isAscending ? a - b : b - a));
        expect(prices).toEqual(sorted);
    }
    else if (sortType.toLowerCase().includes("name")) {
        const names = await page.$$eval(".inventory_item_name", (els) => els.map((el) => (el.textContent || "").trim().toLowerCase()));
        const sorted = [...names].sort((a, b) => isAscending ? a.localeCompare(b) : b.localeCompare(a));
        expect(names).toEqual(sorted);
    }
    else {
        throw new Error(`Unsupported sort type: ${sortType}`);
    }
});
