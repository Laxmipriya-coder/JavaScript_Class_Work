//Destructuring an array
//  let arr = [100,200,300,400,500];
// let [x1,x2,x3,x4,x5]= arr;
// console.log(x1,x2,x3,x4,x5);

// Using Rest Parameter 
// let a = [100,50,30,20];
// let [x1,x2,...x3]= a;
// console.log(x1,x2,x3);


// Skip an array
// let b=[1000,3000,5000];
// let [x1,,x2] = b;
// console.log(x1,x2);

// To prevent Undefined we work with default parameter
// let arr1 = [10,20];
// let [y1=0,y2=1,y3=2] = arr1;
// console.log(y1,y2,y3);

// Swapping two numbers don't use 3rd Variable
// let a = 10;
// let b= 20;
// [b,a] = [a,b];
// console.log(a,b);

// Function Parameter
// function student(name,course){
//     console.log(name,course);
// }
// student("Laxmi","MERN");

// function student([name,course]){
//     console.log(name,course);
//     return ['p1','c1']
// }
// let[Smita,MERN] = student();
// console.log(Smita,MERN);

// function data([name,course]){
//     console.log(`Welcome ${name} and your course is ${course}`);
//     return ['p1','c1'];
// }

// let s1  = ['satya','java'];
// let s2 = ['happy','mern'];

// let [tech1,com1] = data(s1);
// let [tech2,com2] = data(s2);
// console.log(tech1,com1);
// console.log(tech2,com2);


const colors = ['red','green','blue'];
const [first,,second] = colors;
// console.log(first,second);
console.log(first,second);
