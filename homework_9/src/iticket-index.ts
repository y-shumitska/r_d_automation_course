import { ITicket } from './iticket';
import { Task } from './task';
import { BugReport } from "./bug-report";

const task1 = new Task('Jack', 'Jane', 'done', 5, 4);
const bugReport1 = new BugReport('Joe', 'Jerry', 'done', 3, 9, 'major');

function isEstimationAccurate(ticket: ITicket): void {
    ticket.checkEstimationAccuracy();
}

isEstimationAccurate(task1);
isEstimationAccurate(bugReport1);
