import { Locator, Page } from '@playwright/test';
import { getElementTexts } from './helper.ts';

export class ContentsTabsElement {
    private get tab(): Locator {
        return this.page.locator('.tabs__menu-button');
    }

    private get tabText(): Locator {
        return this.page.locator('.tabs__menu-button-title');
    }

    public constructor(private page: Page) {}

    public async getTabNames(): Promise<string[]> {
        return await getElementTexts(this.tabText);
    }

    public async selectTab(tabName: string): Promise<void> {
        const tabNames = await this.getTabNames();
        if (!tabNames.includes(tabName)) {
            throw new Error(`Tab with name "${tabName}" not found.`);
        }

        const tabs = await this.tabText.all();
        await tabs[tabNames.indexOf(tabName)].click();
    }

    public async getActiveTab(): Promise<string> {
        const tabs = await this.tab.all();

        let index = -1;
        for (const tab of tabs) {
            const selected = (await tab.getAttribute('class'))?.includes('active');
            if (selected) {
                index = tabs.indexOf(tab);
                break;
            }
        }

        const tab = (await this.getTabNames())[index];

        return tab;
    }
}
