import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import PurchasePage from '../pages/purchase.page.js';

setDefaultTimeout(60 * 1000);

let purchasePage: PurchasePage;

When('I add a product to the cart', async function () {
    purchasePage = new PurchasePage((global as any).page);
    await purchasePage.addProductToCart();
});

When('I complete the checkout process', async function () {
    await purchasePage.completeCheckout();
});

Then('I should see the success message {string}', async function (expectedMessage: string) {
    await purchasePage.validateSuccessMessage(expectedMessage);
    await (global as any).browser.close();
});
