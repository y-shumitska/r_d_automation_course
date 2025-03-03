export class Member {
    public name: string;
    public phoneNumber: string;
    public email: string;
    public isNew: boolean;

    public constructor(name: string, phoneNumber: string, email: string, isNew: boolean) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.isNew = isNew;
    }
}


export class Club {
    private _clubName: string;
    private _members: Member[] = [];
    public moderator: Member;
    public meetingsPerYear: number;

    public constructor(clubName: string, moderator: Member, meetingsPerYear: number) {
        this._clubName = clubName;
        this.moderator = moderator;
        this.meetingsPerYear = meetingsPerYear;
    }

    public addMember(m: Member): void {
        this._members.push(m);
    }

    public countMembers(): number {
        return this._members.length;
    }
}
