import { test, expect } from '@playwright/test';
import { IncomePage } from 'src/pages/incomes-page';
import { LoginPage } from 'src/pages/login-page';

// run for each test to avoid 500 error for /refresh endpoint
test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    const newPage = await context.newPage();
    const loginPage = new LoginPage(newPage, context);

    await loginPage.goto();
    if (await loginPage.isLoggedIn()) {
        await loginPage.logout();
    }
    await loginPage.login(process.env.LOGIN as string, process.env.PASSWORD as string);
    await loginPage.logoutButton.waitFor();

    await newPage.close();
});

test.describe('Testing CRUD of income', () => {
    test('Test adding income', async ({ page }) => {
        const incomePage = new IncomePage(page);

        await incomePage.goto();
        await incomePage.clickIncomeButtonInMenu();
        await incomePage.saveNewIncome('40000', 'Test 1');
        await incomePage.waitFirstRecordOfIncome();
        await expect(incomePage.firstRecordOfIncome).toBeVisible();
    });

    test('Test editing income', async ({ page }) => {
        const incomePage = new IncomePage(page);

        await incomePage.goto();
        await incomePage.clickIncomeButtonInMenu();
        await incomePage.waitFirstRecordOfIncome();
        await expect(incomePage.firstRecordOfIncome).toBeVisible();

        await incomePage.acceptDialogue(page);

        await incomePage.editIncome('30000');
        await expect(incomePage.editedIncomeInput).toBeVisible();
    });

    test('Test deleting income', async ({ page }) => {
        const incomePage = new IncomePage(page);

        await incomePage.goto();
        await incomePage.clickIncomeButtonInMenu();
        await incomePage.waitFirstRecordOfIncome();
        await expect(incomePage.firstRecordOfIncome).toBeVisible();

        await incomePage.acceptDialogue(page);

        await incomePage.deleteIncome();
        await expect(incomePage.firstRecordOfIncome).toBeHidden();
    });
});
