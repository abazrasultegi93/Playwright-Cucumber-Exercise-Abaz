import { expect } from '@playwright/test';
export class LoginPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async login(username, password) {
        await this.page.fill('[data-test="username"]', username);
        await this.page.fill('[data-test="password"]', password);
        await this.page.click('[data-test="login-button"]');
    }
    async validateErrorMessage(expectedMessage) {
        const errorElement = this.page.locator('[data-test="error"]');
        await expect(errorElement).toHaveText(expectedMessage);
    }
}
