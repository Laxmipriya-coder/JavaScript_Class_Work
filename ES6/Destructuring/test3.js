
// console.log(s1.name);
// console.log(s1["course"]);
// console.log(s1.age);

// let {name,age,course,...address} = s1;
// console.log(name,age,course,address);

// let {...address} = s1;
// console.log(address); 

// let {address} = s1;
// console.log(address);

// let {name:sname="Laxmipriya",age:sage} = s1;
// console.log(sname,sage);

// let {name,age,...details}= s1;
// console.log( typeof name, typeof details,typeof age);
// console.log(name,age,details);


// let {name,age,course,address} = s1;
// console.log(name,age,course,address);
// console.log(typeof name,typeof age, typeof course, typeof address);


// function main(name,result){
//     console.log('Welcome ' + s1.name);
//     return {data: s1.result}
// }
// let s1 = {name:"Laxmi",age:22,course:"MERN",result:"Pass"};
// console.log(main(s1));


function main({name,result}){
    console.log('Welcome '+ name);
    return {data:result}
}
let s1 = {name:"Laxmi",age:23,course:"MERN",result:"Pass"};
let {data} = main(s1);
console.log(data);