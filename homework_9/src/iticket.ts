export interface ITicket {
    assignee: string | null;
    reporter: string;
    status: string;
    timeEstimated: number;
    timeSpent: number;

    checkEstimationAccuracy (): number;
}
