import type { Browser, Page } from 'playwright';

declare global {
    namespace NodeJS {
        interface Global {
            browser?: Browser;
            page?: Page;
        }
    }

    var browser: Browser;
    var page: Page;
}

export {};
