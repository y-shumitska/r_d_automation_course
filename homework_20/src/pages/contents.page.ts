import { Page } from 'playwright';
import { ContentsTabsElement } from '../elements/contents-tabs.elements.ts';
import { TableOfContentsElements } from '../elements/contents-links.elements.ts';

export class ContentsPage {
    public tabsElement: ContentsTabsElement;
    public contentsElements: TableOfContentsElements;

    public constructor(private page: Page) {
        this.tabsElement = new ContentsTabsElement(page);
        this.contentsElements = new TableOfContentsElements(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://javascript.info/', { waitUntil: 'domcontentloaded' });
    }

    public async getTabNames(): Promise<string[]> {
        return this.tabsElement.getTabNames();
    }

    public async selectTab(tabName: string): Promise<void> {
        await this.tabsElement.selectTab(tabName);
    }

    public async getActiveTab(): Promise<string> {
        return this.tabsElement.getActiveTab();
    }

    public async getPartNames(): Promise<string[]> {
        return this.contentsElements.getPartNames();
    }

    public async getChapterNames(): Promise<string[]> {
        return this.contentsElements.getChapterNames();
    }

    public async getTopicNames(): Promise<string[]> {
        return this.contentsElements.getTopicNames();
    }

    public async selectTopic(topicName: string): Promise<void> {
        await this.contentsElements.selectTopic(topicName);
    }
}
