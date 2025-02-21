import { Club, Member } from "./class";

const moderator: Member = new Member('John Smith', '0975567980', 'jsmith@gmail.com', false);
const club = new Club('English Speaking Club', moderator, 10);

const member1: Member = new Member ('Yevheniia Shumitska', '0678892940', 'shum@gmail.com', true);
club.addMember(member1);
const numberOfMembers = club.countMembers();
console.log(numberOfMembers);
