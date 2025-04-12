import { After, Before } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import * as fs from 'fs';
import { BrowserContextOptions } from 'playwright';

export function browserContextHook(): void {
    Before(async function (this: RobotDreamsWorld, { pickle }) {
        const featureName = pickle.uri.replace('.feature', '').replace(':', '-').replace('\\', '/');
        const scenarioName = pickle.name.split(':').join('').replace('/', '-').replace('\\', '-');
        const path = 'videos/' + featureName + '/' + scenarioName;

        const browserOptions: BrowserContextOptions = {
            recordVideo: { dir: path },
            timezoneId: 'Europe/London',
            viewport: { width: 1280, height: 1024 }
        };

        if (fs.existsSync('browser-context.json')) {
            browserOptions.storageState = 'browser-context.json';
        }
        this.context = await RobotDreamsWorld.browser.newContext(browserOptions);
    });

    After(async function (this: RobotDreamsWorld) {
        await this.context.close();
    });
}
