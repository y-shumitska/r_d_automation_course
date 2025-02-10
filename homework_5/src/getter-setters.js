const employee = {
    name: 'Yevheniia',
    surname: 'Tymchenko',
    position: 'Manual QA',
    age: 29,
    _courses: [
        {
            courseName: 'API Testing',
            yearOfFinishing: 2022
        }
    ],
    set course(courseName) {
        this._courses.push({courseName: courseName, yearOfFinishing: 2025});
    },
    get courses() {
        return this._courses;
    }
};

employee.course = 'QA-AUTOMATION-TYPESCRIPT';
console.log('The employee finished the following courses:');
console.log(employee.courses);
