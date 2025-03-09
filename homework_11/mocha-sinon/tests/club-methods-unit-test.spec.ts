import sinon from 'ts-sinon';
import { expect } from 'chai';
import { Club, Member } from '../src/class';

describe('Checking the addMember method', () => {
    it('One member must be added', () => {
        const memberOne = new Member('Kate', '0978823583', 'kate@gmail.com', true);
        const mockMemberOne = sinon.mock(memberOne);
        const clubOne = new Club('Programming Club', mockMemberOne as unknown as Member, 12);

        clubOne.addMember(mockMemberOne  as unknown as Member);
        expect(clubOne.countMembers()).to.equal(1);
    });
});

describe('Checking the countMembers method', () => {
    it('Must return 0 if no members are added', () => {
        const memberOfCookingClub = new Member('Olia', '0979823583', 'olia@gmail.com', true);
        const clubTwo = new Club ('Cooking Club', memberOfCookingClub, 30);
        const mockClubTwo = sinon.mock(clubTwo);
        mockClubTwo.expects('countMembers').once().returns(0);
    });
});
