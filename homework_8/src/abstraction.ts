export abstract class Employee {
    public workingHoursPerDay = 0;
    public workingDaysPerWeek = 0;

    public constructor(workingHoursPerDay: number, workingDaysPerWeek: number) {
        this.workingHoursPerDay = workingHoursPerDay;
        this.workingDaysPerWeek = workingDaysPerWeek;
    }

    public abstract calculateEmployeeCapacity(): number;
}

export class AutomationQA extends Employee {
    public constructor(workingHoursPerDay: number, workingDaysPerWeek: number) {
        super(workingHoursPerDay, workingDaysPerWeek);
    }

    public calculateEmployeeCapacity(): number {
        return this.workingHoursPerDay * this.workingDaysPerWeek;
    }

}

const newAQA = new AutomationQA(8, 5);
console.log(newAQA.calculateEmployeeCapacity());
