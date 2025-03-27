import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { RZTKPage } from '../src/pom/rozetka.page';

describe('Puppeteer rozetka tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let rztkPage: RZTKPage;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        rztkPage = new RZTKPage(page);
        //await context.deleteCookie();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should change language', async () => {
        await rztkPage.goTo();
        await rztkPage.clickLangButton();
        await rztkPage.waitForLangMenu();
        const currentUrl = page.url();
        if (currentUrl == 'https://rozetka.com.ua/ua/') {
            await rztkPage.clickRuButton();
            await page.waitForFunction((expectedUrl) => window.location.href === expectedUrl, {}, 'https://rozetka.com.ua/');
            const newUrl = page.url();
            expect(newUrl).to.equal('https://rozetka.com.ua/');
        } else {
            await rztkPage.clickUaButton();
            await page.waitForFunction((expectedUrl) => window.location.href === expectedUrl, {}, 'https://rozetka.com.ua/ua/');
            const newUrl = page.url();
            expect(newUrl).to.equal('https://rozetka.com.ua/ua/');
        }
    }).timeout(20000);

    it('should open https://help.rozetka.com.ua/', async () => {
        await rztkPage.goTo();
        await rztkPage.clickMenuButton();
        await rztkPage.waitMenuSidebar();
        await rztkPage.clickHelpButton();
        await page.waitForFunction((expectedUrl) => window.location.href === expectedUrl, {}, 'https://help.rozetka.com.ua/');
        const newUrl = page.url();
        expect(newUrl).to.equal('https://help.rozetka.com.ua/');
    }).timeout(20000);
});
