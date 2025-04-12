import { Given, Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { expect } from '@playwright/test';

Given('the contents page is opened', async function (this: RobotDreamsWorld) {
    await this.contentsPage.goto();
});

When('the user clicks the tab', async function (this: RobotDreamsWorld) {
    await this.contentsPage.getTabNames();
    await this.contentsPage.selectTab('Part 2');
});

Then('the user made the tab active', async function (this: RobotDreamsWorld) {
    const currentTab = await this.contentsPage.getActiveTab();
    expect(currentTab === 'Part 2');
});

When('the user clicks the topic', async function (this: RobotDreamsWorld) {
    await this.contentsPage.getTopicNames();
    await this.contentsPage.selectTopic('DOM tree');
});

Then('the user opened the topic', async function (this: RobotDreamsWorld) {
    const currentHeader = await this.topicPage.getHeaderText();
    expect(currentHeader === 'DOM tree');
});
