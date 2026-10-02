--->What is Javascript
Javascript is a versatile ,high-level programming language that serves as one as of the core technologies of the world wide wide.
Javascript is a multiparadigm Programming language because it supports object-oriented, functional and procedural with single language.

--->What are the Key Features of Javascript
Javascript is a lightweight programming language
js code is executed by javascript enginee,which uses interpretation and just in time compilation.
Javascript is a dynamically type programming means we dont need to specify the data type of a variables.
Asynchronous it can perform task without blocking other code.
using callback,promise,async/await
first class function function can be stored as a variable,passed as an arguments, and returend from other function

--->Data Types of JavaScript
Two types
Primitive Data tye and Non Primitive Data Type
Primitive Data Type-- number,string,null,boolean,undefined,bigInt,symbol
Non-Primitive Data Type-- function,object,array

--->var,let and const difference
var was introduced in older version of javascript
var is a global scope 
redeclaration and reassignment is possible in var keyword

let was introduced in es6 version of javascript
let is block scope mean if we declare a varibale using let keyword we can the variable with in the same block if we accessthe value in outside of the block it through Refernce Error.
redeclaration is not possible but reassignment is possible in let keyword

const was introduced in es6 version of javascript
const is block scope mean if we declare a varibale using const keyword we can the variable with in the same block if we accessthe value in outside of the block it through Refernce Error.
const keyword we can't redeclare and reassign but const keyword we can initialize

--->Hoisting in javascript
hoisting is a javascript behaviour which allows variables functions to use before their declarations.
js only hoists declaration not initialization or assignments
function declaration fully hoisted and runs successfully
var keyword fully hoisted initialized as undefined and returned undefined
let keyword hoisted but initialzed with  no value and return Reference Error
const keyword hoisted but initialized with no value and return reference error.
--->Scope 
scope determines the visibility and accessibility of a variables,function and object.
in javascript there are 3 scope 
global scope
variables declared outside of the any functyion / block and it can access in anywhere is known as global scope
local scope
variables declared inside any function/block with var,let and const keyword is known as local scope
it can be accessible only inside the function
block scope
it can be accessible only within  curly braces
--->Closure
closure is happen when in 2 function inner function remember and can access the outer function variables before outer function end.
example:-
function outer{
let count =0;
function inner(){
count ++;
console.log(count)
}
return inner;
}
let res = outer();
res();
res();
res();
--->Promise/async-await