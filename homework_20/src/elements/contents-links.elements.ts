import { Locator, Page } from '@playwright/test';
import { getElementTexts } from './helper.ts';

export class TableOfContentsElements {
    private get partName(): Locator {
        return this.page.locator('.frontpage-content__title');
    }

    private get chapterName(): Locator {
        return this.page.locator('div.list__title');
    }

    private get topicName(): Locator {
        return this.page.locator('a.list-sub__link');
    }

    public constructor(private page: Page) {}

    public async getPartNames(): Promise<string[]> {
        return await getElementTexts(this.partName);
    }

    public async getChapterNames(): Promise<string[]> {
        return await getElementTexts(this.chapterName);
    }

    public async getTopicNames(): Promise<string[]> {
        return await getElementTexts(this.topicName);
    }

    public async selectTopic(topicName: string): Promise<void> {
        const topicNames = await this.getTopicNames();
        if (!topicNames.includes(topicName)) {
            throw new Error(`Topic with name "${topicName}" not found.`);
        }

        const tabs = await this.topicName.all();
        await tabs[topicNames.indexOf(topicName)].click();
    }
}
