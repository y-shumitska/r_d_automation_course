import { test, expect } from '@playwright/test';

test.describe('Testing the React app', () => {
    test('Should check title', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('Expense Tracker App With React.JS!');
    });
});
