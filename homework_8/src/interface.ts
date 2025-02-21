export interface Profiles {
    name: string;
    age: number;
    city: string;
    married: boolean;
    hobbies: [];
    address: {
        street: string;
        city: string;
        postal_code: string;
    }
}

export async function getJson(): Promise<Profiles> {
    const response = await fetch ('https://samples-files.com/samples/code/json/sample1.json');
    const json = await response.json() as Profiles;
    return json;
}


class ReadingClubProfiles {
    private _obj: Profiles;
    public constructor(obj: Profiles) {
        this. _obj = obj;
    }

    public greeting(): void {
        console.log(`Dear ${this._obj.name}, welcome in our Reading Club!`);
    }

}
(async () => {
    const obj2: ReadingClubProfiles = new ReadingClubProfiles(await getJson());
    obj2.greeting();
})();
