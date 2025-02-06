const pet = {
    type: 'cat',
    grade: 'Master',
    name: 'Fin',
    age: 5,
    isCool: true,
    slaves: [
        {
            type: 'human',
            name: 'Victor',
            age: 64
        },
        {
            type: 'human',
            name: 'Luida',
            age: 62
        }
    ],
    addressToCat:function() {
        return this.grade + ' ' + this.name;
    }
};

console.log('The cat prefers to be called ' + pet.addressToCat());
