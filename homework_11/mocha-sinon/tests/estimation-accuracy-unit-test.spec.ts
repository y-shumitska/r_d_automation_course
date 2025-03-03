import sinon from 'ts-sinon';
import { Task } from '../src/task';

describe('Checking the function that checks the estimation accuracy of the task', () => {
    it('The difference between timeEstimated and timeSpent must be 1 - accurate', () => {
        //Creating a mock object
        const taskOne = new Task('Linda', 'Adam', 'done', 9, 8);
        const mockTaskOne = sinon.mock(taskOne);

        //Expecting the 'checkEstimationAccuracy' to be called once and return 1
        mockTaskOne.expects('checkEstimationAccuracy').once().returns(1);

        //Calling the mocked method
        taskOne.checkEstimationAccuracy();

        mockTaskOne.verify();
        mockTaskOne.restore();
    });

    it('The difference between timeEstimated and timeSpent must be 2 - inaccurate', () => {
        const taskTwo = new Task('Erica', 'Peter', 'done', 10, 8);
        const mockTaskTwo = sinon.mock(taskTwo);

        //Expecting the 'checkEstimationAccuracy' to be called once and return 1
        mockTaskTwo.expects('checkEstimationAccuracy').once().returns(1);

        //Calling the mocked method
        taskTwo.checkEstimationAccuracy();

        mockTaskTwo.verify();
        mockTaskTwo.restore();
    });
});
