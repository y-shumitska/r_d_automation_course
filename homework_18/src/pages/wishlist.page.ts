import { Locator, Page } from '@playwright/test';

export class WishListPage {
    public get clearWishListButton(): Locator {
        return this.page.locator('button[aria-controls="clearWishlistModal"]');
    }

    public get confirmToClearWishButton(): Locator {
        return this.page.locator('[data-request="onWishlistClear"]');
    }

    public constructor(private page: Page) {}

    public async clickClearkWishListButton(): Promise<void> {
        await this.clearWishListButton.click();
    }

    public async waitForClearWishListButtonToDisappear(): Promise<void> {
        await this.clearWishListButton.waitFor({ state: 'hidden', timeout: 5000 });
    }

    public async waitForConfirmWishListButton(): Promise<void> {
        await this.confirmToClearWishButton.waitFor();
    }

    public async clickConfirmWishListButton(): Promise<void> {
        await this.confirmToClearWishButton.click();
    }
}
