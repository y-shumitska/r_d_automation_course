import { Locator } from '@playwright/test';

export async function getElementTexts(elementText: Locator): Promise<string[]> {
    const elementTexts: string[] = [];

    const texts = await elementText.all();

    for (const text of texts) {
        const content = await text.textContent();
        elementTexts.push(content?.trim() ?? '');
    }
    return elementTexts;
}
