import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { ContentsPage } from '../pages/contents.page.ts';
import { TopicPage } from '../pages/topic.page.ts';

export class RobotDreamsWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown>();
    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get browser(): Browser {
        return RobotDreamsWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return RobotDreamsWorld.globalContext;
    }

    // pages getters
    public get contentsPage(): ContentsPage {
        if (!this._contentsPage) {
            this._contentsPage = new ContentsPage(this.page);
        }
        return this._contentsPage;
    }

    public get topicPage(): TopicPage {
        if (!this._topicPage) {
            this._topicPage = new TopicPage(this.page);
        }
        return this._topicPage;
    }
    // pages
    private _contentsPage: ContentsPage;
    private _topicPage: TopicPage;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
