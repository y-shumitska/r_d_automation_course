import { ITicket } from './iticket';

export class Task implements ITicket {
    public assignee: string | null;
    public reporter: string;
    public status: string;
    public timeEstimated: number;
    public timeSpent: number;

    public constructor(assignee: string, reporter: string, status: string, timeEstimated: number, timeSpent: number) {
        this.assignee = assignee;
        this.reporter = reporter;
        this.status = status;
        this.timeEstimated = timeEstimated;
        this.timeSpent = timeSpent;
    }
    public checkEstimationAccuracy(): number {
        const result: number = this.timeEstimated - this.timeSpent;
        if (result <= 1 && result >= -1){
            console.log('The estimation of this task is accurate.');
        } else {
            console.log('The estimation of this task is inaccurate.');
        }
        return result;
    }
}
