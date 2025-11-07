import { After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
After(async function (scenario) {
    try {
        if (scenario.result?.status === Status.FAILED && globalThis.page) {
            const screenshotDir = path.resolve('reports/screenshots');
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }
            const safeName = scenario.pickle.name.replace(/[^a-zA-Z0-9-_]/g, '_');
            const screenshotPath = path.join(screenshotDir, `${safeName}.png`);
            try {
                await globalThis.page.screenshot({ path: screenshotPath, fullPage: true });
                console.log(`📸 Screenshot saved at: ${screenshotPath}`);
                const image = fs.readFileSync(screenshotPath);
                const world = this;
                if (world.attach) {
                    world.attach(image.toString('base64'), 'image/png');
                }
            }
            catch (err) {
                console.warn(`⚠️ Screenshot skipped: ${err.message}`);
            }
        }
        if (globalThis.browser) {
            try {
                await globalThis.browser.close();
                console.log('🧹 Browser closed successfully.');
            }
            catch (err) {
                console.warn(`⚠️ Browser already closed or unavailable: ${err.message}`);
            }
        }
    }
    catch (outerErr) {
        console.error(`❌ Error in After hook: ${outerErr.message}`);
    }
});
