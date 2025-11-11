//* Constraints is used to add additional rules on generic type
//* it is used to specify at least some types of generic

const addStudentToCourse = <T>(student:T) => {
    return {
        course: 'Next Level',
        ...student
    }
}
const student1 = addStudentToCourse({name: 'Sajid', age: 20});
const student2 = addStudentToCourse({isMarried: true, hasCar: false});
console.log(student1);
console.log(student2);



const addStudentToCourseWithConstraint = <T extends {name: string, age: number}>(student:T) => {
    return {
        course: 'Next Level',
        ...student
    }
}
const student3 = addStudentToCourseWithConstraint({name: 'Sajid', age: 20});
const student4 = addStudentToCourseWithConstraint({isMarried: true, hasCar: false});
console.log(student3);
console.log(student4);