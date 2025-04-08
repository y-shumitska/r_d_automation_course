import { Locator, Page } from '@playwright/test';

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
        const partNames: string[] = [];

        const parts = await this.partName.all();

        for (const part of parts) {
            const text = await part.textContent();
            partNames.push(text?.trim() ?? '');
        }

        return partNames;
    }

    public async getChapterNames(): Promise<string[]> {
        const chapterNames: string[] = [];

        const chapters = await this.chapterName.all();

        for (const chapter of chapters) {
            const text = await chapter.textContent();
            chapterNames.push(text?.trim() ?? '');
        }

        return chapterNames;
    }

    public async getTopicNames(): Promise<string[]> {
        const topicNames: string[] = [];

        const topics = await this.topicName.all();

        for (const topic of topics) {
            const text = await topic.textContent();
            topicNames.push(text?.trim() ?? '');
        }

        return topicNames;
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
