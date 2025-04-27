import { BrowserContext, Locator, Page } from '@playwright/test';
import * as fs from 'fs';

export class LoginPage {
    private get loginButtonInHeader(): Locator {
        return this.page.locator('[href="/auth/login"]');
    }

    private get emailInput(): Locator {
        return this.page.locator('#email');
    }
    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }
    private get loginButtonInForm(): Locator {
        return this.page.locator('button[type="submit"]');
    }

    public get logoutButton(): Locator {
        return this.page.locator('[href="/auth/logout"]');
    }

    public constructor(
        private page: Page,
        private context: BrowserContext
    ) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/'), { waitUntil: 'load' };
    }

    public async isLoggedIn(): Promise<boolean> {
        return this.logoutButton.isVisible();
    }

    public async logout(): Promise<void> {
        await this.logoutButton.click();
    }

    public async login(email: string, password: string): Promise<void> {
        await this.loginButtonInHeader.waitFor();
        await this.loginButtonInHeader.click();
        await this.loginButtonInForm.waitFor();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButtonInForm.click();

        await this.logoutButton.waitFor();

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }
}
