import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import PurchasePage from '../pages/purchase.page.js';
setDefaultTimeout(60 * 1000);
let purchasePage;
When('I add a product to the cart', async function () {
    purchasePage = new PurchasePage(global.page);
    await purchasePage.addProductToCart();
});
When('I complete the checkout process', async function () {
    await purchasePage.completeCheckout();
});
Then('I should see the success message {string}', async function (expectedMessage) {
    await purchasePage.validateSuccessMessage(expectedMessage);
    await global.browser.close();
});
