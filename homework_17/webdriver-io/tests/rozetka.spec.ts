import { browser } from '@wdio/globals';
import { expect } from 'expect-webdriverio';
import { RZTKPage } from '../src/pages/rozetka.page';

describe('WDIO rozetka tests', () => {
    let rztkPage: RZTKPage;

    before(async () => {
        await browser.maximizeWindow();
        rztkPage = new RZTKPage();
        //await rztkPage.goTo();
    });

    it('should change language', async () => {
        await rztkPage.goTo();
        await rztkPage.clickLangButton();
        await rztkPage.waitForLangMenu();
        const currentUrl = await browser.getUrl();
        if (currentUrl == 'https://rozetka.com.ua/ua/') {
            await rztkPage.clickRuButton();
            await browser.waitUntil(async () => (await browser.getUrl()) === 'https://rozetka.com.ua/', {
                timeout: 5000,
                timeoutMsg: 'Expected URL did not match within the time limit'
            });
            const newUrl = await browser.getUrl();
            expect(newUrl).toEqual('https://rozetka.com.ua/');
        } else {
            await rztkPage.clickUaButton();
            await browser.waitUntil(async () => (await browser.getUrl()) === 'https://rozetka.com.ua/ua/', {
                timeout: 5000,
                timeoutMsg: 'Expected URL did not match within the time limit'
            });
            const newUrl = await browser.getUrl();
            expect(newUrl).toEqual('https://rozetka.com.ua/ua/');
        }
    }).timeout(20000);

    it('should open https://help.rozetka.com.ua/', async () => {
        await rztkPage.goTo();
        await rztkPage.clickMenuButton();
        await rztkPage.waitMenuSidebar();
        await rztkPage.clickHelpButton();
        await browser.waitUntil(async () => (await browser.getUrl()) === 'https://help.rozetka.com.ua/', {
            timeout: 5000,
            timeoutMsg: 'Expected URL did not match within the time limit'
        });
        const newUrl = await browser.getUrl();
        expect(newUrl).toEqual('https://help.rozetka.com.ua/');
    }).timeout(20000);
});
