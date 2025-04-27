import { BrowserContext, Locator, Page } from '@playwright/test';

export class IncomePage {
    private get addIncomeButton(): Locator {
        return this.page.locator('[type="button"][variant="contained"]');
    }

    private get addIncomePopup(): Locator {
        return this.page.locator('#add-new-income');
    }

    private get incomeInput(): Locator {
        return this.page.locator('#Income-New');
    }

    private get commentInput(): Locator {
        return this.page.locator('#Comment-New-label');
    }

    private get saveIncomeButton(): Locator {
        return this.page.locator('#BtnAdd-New');
    }

    private get saveEditedIncomeButton(): Locator {
        return this.page.locator('[type="button"][variant="outline-success"]');
    }

    private get editIncomeButton(): Locator {
        return this.page.locator('[type="button"][tabindex="0"][variant="outline-warning"]');
    }

    private get existingIncomeInput(): Locator {
        return this.page.locator('input[value="40000"]');
    }

    private get deleteExistingIncomeButton(): Locator {
        return this.page.locator('[type="button"][variant="outline-danger"]');
    }

    private get incomeButtonInMenu(): Locator {
        return this.page.locator('.side-navigation-panel-select');
    }

    public get firstRecordOfIncome(): Locator {
        return this.page.locator('tbody td').nth(1);
    }

    public get editedIncomeInput(): Locator {
        return this.page.locator('input[value="30000"]');
    }

    public get incomeInTable(): Locator {
        return this.page.locator('.table-income');
    }

    public constructor(private page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/incomes', { waitUntil: 'load' });
    }

    public async clickIncomeButtonInMenu(): Promise<void> {
        await this.incomeButtonInMenu.first().click();
    }

    public async saveNewIncome(income: string, comment: string): Promise<void> {
        await this.addIncomeButton.waitFor();
        await this.addIncomeButton.click();
        await this.addIncomePopup.waitFor();
        await this.incomeInput.fill(income);
        await this.commentInput.fill(comment);
        await this.saveIncomeButton.click();
    }

    public async editIncome(income: string): Promise<void> {
        await this.editIncomeButton.click();
        await this.existingIncomeInput.waitFor();
        await this.existingIncomeInput.click();
        await this.existingIncomeInput.fill(income);
        await this.saveEditedIncomeButton.click();
    }

    public async deleteIncome(): Promise<void> {
        await this.deleteExistingIncomeButton.waitFor();
        await this.deleteExistingIncomeButton.click();
    }

    public async waitFirstRecordOfIncome(): Promise<void> {
        await this.firstRecordOfIncome.waitFor({ state: 'visible' });
    }

    public async acceptDialogue(page: Page): Promise<void> {
        page.on('dialog', async (dialog) => {
            console.log(dialog.message());
            await dialog.accept();
        });
    }
}
