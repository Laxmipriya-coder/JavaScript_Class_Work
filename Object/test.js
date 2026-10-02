let student = {
    name: "Laxmi",
    age: 22
}

let student1 = {
    city:"Bhubaneswar",
    state:"Odisha"
}

console.log(student);
console.log(student1);
Object.assign(student,student1);
console.log(student);
// Object.assign(student,student1);
// let result = Object.keys(student);
// console.log(result);

// let result2 = Object.values(student);
// console.log(result2);

// let result3 = Object.entries(student);
// console.log(result3);


// console.log(student);
// console.log(student1);


//Object.freeze()
/*let student = {
    name:"Laxmipriya",
    age:22,
    course:"MERN"
}

Object.freeze(student);
student.age = 50;
delete student.course;
console.log(student);*/

// Object.seal()
// let student = {
//     name:"Laxmipriya",
//     age:22,
//     course:"MERN"
// }
// Object.seal(student);

// student.city = "Bhubaneswar"
// delete student.course;
// student.name = "Tanaya";
// console.log(student);


// Object.seal(student);

// student.name = "Kandhei";
// delete student.course;
// student.city = "Bhubaneswar";
// console.log(student);