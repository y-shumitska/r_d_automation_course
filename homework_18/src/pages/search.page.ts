import { Locator, Page } from '@playwright/test';

export class SearchPage {
    public constructor(private page: Page) {}

    public headingHasText(text: string): Locator {
        return this.page.locator(`h1.mb-5:has-text("${text}")`);
    }
}
