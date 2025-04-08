import { expect, test } from '@playwright/test';
import { MainPage, SearchPage, WishListPage } from '../src/pages';

test.describe('Tests on the bookshop website', () => {
    test('should search books', async ({ page }) => {
        const mainPage = new MainPage(page);
        const searchPage = new SearchPage(page);

        await mainPage.goto();
        await mainPage.fillSearchInput('За Перекопом є земля');
        await mainPage.clickSearchButton();
        expect(searchPage.headingHasText('За Перекопом є земля'));
    });
    test('should add a book to the wishlist', async ({ page }) => {
        const mainPage = new MainPage(page);

        await mainPage.goto();
        await mainPage.clickFirstAddToWishListButton();
        await expect(mainPage.wishListBadge).toBeVisible();
    });

    test('should clear the wishlist', async ({ page }) => {
        const mainPage = new MainPage(page);
        const wishListPage = new WishListPage(page);

        await mainPage.goto();
        await mainPage.clickFirstAddToWishListButton();
        await mainPage.clickWishListButton();
        await wishListPage.clickClearkWishListButton();
        await wishListPage.waitForConfirmWishListButton();
        await wishListPage.clickConfirmWishListButton();
        await expect(wishListPage.clearWishListButton).toBeHidden({ timeout: 15000 });
    });
});
