import { expect } from '@playwright/test';
export default class PurchasePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async addProductToCart() {
        console.log('Adding product to cart...');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForSelector('.inventory_list', { timeout: 30000 });
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        console.log('Product added to cart');
        await this.page.locator('.shopping_cart_link').click();
        await this.page.waitForSelector('[data-test="checkout"]', { timeout: 20000 });
        console.log('Cart page loaded');
    }
    async completeCheckout() {
        console.log('Starting checkout process...');
        await this.page.waitForSelector('[data-test="checkout"]', { timeout: 30000 });
        await this.page.locator('[data-test="checkout"]').click();
        await this.page.waitForSelector('[data-test="firstName"]', { timeout: 20000 });
        await this.page.fill('[data-test="firstName"]', 'Abaz');
        await this.page.fill('[data-test="lastName"]', 'Esentur');
        await this.page.fill('[data-test="postalCode"]', '60661');
        await this.page.locator('[data-test="continue"]').click();
        await this.page.waitForSelector('[data-test="finish"]', { timeout: 20000 });
        await this.page.locator('[data-test="finish"]').click();
        console.log('Checkout completed successfully!');
    }
    async validateSuccessMessage(expectedMessage) {
        await this.page.waitForSelector('.complete-header', { timeout: 20000 });
        const message = await this.page.textContent('.complete-header');
        expect(message?.trim()).toBe(expectedMessage);
        console.log('Order confirmation message validated!');
    }
}
