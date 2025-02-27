import { expect } from '@jest/globals';

import { AutomationQA } from '../src/abstraction';

describe('Checking the function that counts AQA capacity', () => {
    it('The capacity must be 35', () => {
        const obj2 = new AutomationQA(6, 5);
        expect(obj2.calculateEmployeeCapacity()).toBe(30);
    });
});
