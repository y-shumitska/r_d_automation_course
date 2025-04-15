import { Locator, Page } from '@playwright/test';

export class TopicPage {
    private get header(): Locator {
        return this.page.locator('.main__header-title');
    }

    public constructor(private page: Page) {}

    public async getHeaderText(): Promise<string> {
        const header = this.header;
        const text = await header.textContent();
        return text?.trim() ?? '';
    }
}
