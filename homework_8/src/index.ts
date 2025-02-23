import { ReadingClubProfiles, getJson } from "./interface";
import { AutomationQA } from "./abstraction";
import { Club, Member } from "./class";

//Greeting a member of the Reading Club
(async () => {
    const obj2: ReadingClubProfiles = new ReadingClubProfiles(await getJson());
    obj2.greeting();
})();

//Creating an instance of AQA and counting his/her work capacity
const newAQA = new AutomationQA(8, 5);
console.log(newAQA.calculateEmployeeCapacity());

console.log('---------------------');

//Adding a moderator and a member to the speaking club and counting the current number of members
const moderator: Member = new Member('John Smith', '0975567980', 'jsmith@gmail.com', false);
const club = new Club('English Speaking Club', moderator, 10);

const member1: Member = new Member ('Yevheniia Shumitska', '0678892940', 'shum@gmail.com', true);
club.addMember(member1);
const numberOfMembers = club.countMembers();
console.log(numberOfMembers);

console.log('---------------------');
