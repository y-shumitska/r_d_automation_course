import { Locator, Page } from '@playwright/test';

export class MainPage {
    private get searchInput(): Locator {
        return this.page.locator('#search_input');
    }

    private get searchButton(): Locator {
        return this.page.locator('button[type="submit"][aria-label="Що саме ви шукаєте?"]');
    }

    private get addToWishListButton(): Locator {
        return this.page.locator('button.fn_add_wishlist');
    }

    private get wishListButton(): Locator {
        return this.page.locator('[aria-label="Обране"]');
    }

    public get wishListBadge(): Locator {
        return this.page.locator('[aria-label="Обране"]>.badge');
    }

    public constructor(private page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://readeat.com/', { waitUntil: 'domcontentloaded' });
    }

    public async fillSearchInput(bookName: string): Promise<void> {
        await this.searchInput.fill(bookName);
    }

    public async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }

    public async clickFirstAddToWishListButton(): Promise<void> {
        await this.addToWishListButton.nth(0).click();
    }

    public async clickWishListButton(): Promise<void> {
        await this.wishListButton.click();
    }
}
