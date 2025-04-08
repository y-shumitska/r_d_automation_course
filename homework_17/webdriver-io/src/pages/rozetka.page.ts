import { $, $$, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class RZTKPage {
    private get langButton(): ChainablePromiseElement {
        return $('[data-testid="lang_btn"]');
    }

    private get langMenu(): ChainablePromiseElement {
        return $('[class="lang__menu"]');
    }

    private get uaButton(): ChainablePromiseElement {
        return $('div.lang__menu > ul > li:nth-child(1) > button');
    }

    private get ruButton(): ChainablePromiseElement {
        return $('div.lang__menu > ul > li:nth-child(2) > button');
    }

    private get menuButton(): ChainablePromiseElement {
        return $('button.header-menu.header__button');
    }

    private get menuSidebar(): ChainablePromiseElement {
        return $('[class="content"]');
    }

    private get helpButton(): ChainablePromiseElement {
        return $('a[href$="https://help.rozetka.com.ua/"]');
    }

    private get inCartButton(): ChainablePromiseElement {
        return $('button.buy-button_state_in-cart');
    }

    public async goTo(): Promise<void> {
        await browser.url('https://rozetka.com.ua/');
    }

    public async clickLangButton(): Promise<void> {
        await this.langButton.click();
    }

    public async waitForLangMenu(): Promise<void> {
        await this.langMenu.waitForClickable();
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
        await this.menuSidebar.waitForClickable();
    }

    public async clickHelpButton(): Promise<void> {
        await this.helpButton.click();
    }
}
