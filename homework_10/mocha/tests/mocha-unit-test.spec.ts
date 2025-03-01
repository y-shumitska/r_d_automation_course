import { expect } from 'chai';

import { Task } from '../src/task';

describe('Checking the function that checks the estimation accuracy of the task', () => {
    it('The difference between timeEstimated and timeSpent must be 1 - accurate', () => {
        const obj = new Task('Linda', 'Adam', 'done', 9, 8);
        expect(obj.checkEstimationAccuracy()).to.be.equal(1);
    });

    it('The difference between timeEstimated and timeSpent must be 2 - inaccurate', () => {
        const obj = new Task('Erica', 'Peter', 'done', 10, 8);
        expect(obj.checkEstimationAccuracy()).to.be.equal(2);
    });
});
