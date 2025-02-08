const employee = {
    name: 'Yevheniia',
    surname: 'Tymchenko',
    _position: 'Manual QA',
    age: 29,
    professionalCourses: [
        {
            courseName: 'API Testing',
            yearOfFinishing: 2022
        }
    ],
    set newCourse(courseName) {
        this.professionalCourses.push({courseName: courseName, yearOfFinishing: 2025});
    },
    get position() {
        return this._position;
    }
};

console.log('The current position of employee is ' + employee.position);
employee.newCourse = 'QA-AUTOMATION-TYPESCRIPT';
console.log('-----------------------');
console.log('The employee finished the following courses:');
console.log(employee.professionalCourses);
