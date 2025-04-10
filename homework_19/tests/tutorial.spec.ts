import { test, expect } from '@playwright/test';
import { ContentsPage } from 'src/pages/contents.page';
import { TopicPage } from 'src/pages/topic.page';

test.describe('Testing the JS tutorial table of contents', () => {
    let contentsPage: ContentsPage;

    test.beforeEach(async ({ page }) => {
        contentsPage = new ContentsPage(page);
        await contentsPage.goto();
    });

    test('Part 2 tab should be chosen', async () => {
        await contentsPage.getTabNames();
        await contentsPage.selectTab('Part 2');
        const currentTab = await contentsPage.getActiveTab();
        expect(currentTab === 'Part 2');
    });

    test('DOM tree topic should be clicked on', async ({ page }) => {
        const topicPage = new TopicPage(page);
        await contentsPage.getTopicNames();
        await contentsPage.selectTopic('DOM tree');
        const currentHeader = await topicPage.getHeaderText();
        expect(currentHeader === 'DOM tree');
    });
});
