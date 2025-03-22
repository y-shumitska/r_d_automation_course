import { Locator, Page } from 'puppeteer';

export class RZTKPage {
    private get langButton(): Locator<Element> {
        return this.page.locator('[data-testid="lang_btn"]');
    }

    private get langMenu(): Locator<Element> {
        return this.page.locator('[class="lang__menu"]');
    }

    private get uaButton(): Locator<Element> {
        return this.page.locator('div.lang__menu > ul > li:nth-child(1) > button');
    }

    private get ruButton(): Locator<Element> {
        return this.page.locator('div.lang__menu > ul > li:nth-child(2) > button');
    }

    private get menuButton(): Locator<Element> {
        return this.page.locator('button.header-menu.header__button');
    }

    private get menuSidebar(): Locator<Element> {
        return this.page.locator('[class="content"]');
    }

    private get helpButton(): Locator<Element> {
        return this.page.locator('a[href$="https://help.rozetka.com.ua/"]');
    }

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/', { waitUntil: 'domcontentloaded' });
    }

    public async clickLangButton(): Promise<void> {
        await this.langButton.click();
    }

    public async waitForLangMenu(): Promise<void> {
        await this.langMenu.wait();
    }

    public async clickUaButton(): Promise<void> {
        await this.uaButton.click();
    }

    public async clickRuButton(): Promise<void> {
        await this.ruButton.click();
    }

    public async clickMenuButton(): Promise<void> {
        await this.menuButton.click();
    }

    public async waitMenuSidebar(): Promise<void> {
        await this.menuSidebar.wait();
    }

    public async clickHelpButton(): Promise<void> {
        await this.helpButton.click();
    }
}
