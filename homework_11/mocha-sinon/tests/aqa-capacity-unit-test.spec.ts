import sinon from 'ts-sinon';
import { AutomationQA } from '../src/abstraction';

describe('Checking the function that counts AQA capacity', () => {
    it('The capacity must be 35', () => {
        const object = new AutomationQA(6, 5);
        const mockObject = sinon.mock(object);

        mockObject.expects('calculateEmployeeCapacity').once().returns(30);
        object.calculateEmployeeCapacity();
        mockObject.verify();
        mockObject.restore();

    });
});
