// Write a javascript program to reverse a string
// let str = "Hello";
// let rev = ""
// for(let i =str.length-1; i>=0; i--){
//     rev += str[i];
// }
// console.log(rev);

// Write a javascript program to check a number is prime number or not
// let n=25;
// let count = 0;
// for(let i=1; i<=n; i++){
//     if(n%i == 0){
//         count ++;
//     }
// }
// if(count == 2){
//     console.log("It is a Prime Number");
// }
// else{
//     console.log("It is not a Prime Number");
// }

// Write a javascript program to find the largest number in an array.
// let arr = [25,24,85,2,65];
// let large = arr[0];
// for(let i =1; i<=arr.length-1; i++){
//     if(large < arr[i]){
//         large = arr[i]
//     }
// }
// console.log(large);

// Write a javascript program to find the smallest number in an array.
// let arr = [25,24,85,2,65];
// let large = arr[0];
// for(let i =1; i<=arr.length-1; i++){
//     if(large > arr[i]){
//         large = arr[i]
//     }
// }
// console.log(large);

// Write a javascript program to reverse a string with a dynamic value
function outer(){
let count =0;
function inner(){
count++;
console.log(count);
}
return inner;
}
let result = outer();
result();
result();
result();
result();


// function makecount(){
//     let count = 0;
//     function inCount(){
//         count++;
//         console.log(count);
//     }
//     return inCount;
// }
// let counter = makecount();
// counter();
// counter();
// counter();