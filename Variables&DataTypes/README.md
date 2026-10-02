JavaScript Variables
---------------------
Variables is a container to store single value

Syntax: 
keyword varName;
varName = value;

----------------------------------------------------------------
To create a variable we can use let or var or const keywords.

let and const keywords was introduced in ES6 version in 2015.

var keyword was introduced in older version of javascript.

In let keyword redeclaration is not possible but re-initialization possible.

Ex: 
let n; //Creation or Declaration
n = 12; //Initialization or Assignment

--------------------------------------------------------------------------------------------------------------

JavaScript is a dynamic type programming language

Dynamic Type Programming Language 

It is a typed programming language checks data types at runtime rather than during compilation.

Characteristics 

No explicit declarations: Variables are created simply by assigning them a value.

A single variable can freely hold an integer, then a string, and later an array without causing errors.

example : Python, JavaScript, Ruby

-------------------------------------------------------------------------------------------------------------------
                            JavaScript Data Types                     
                                      |
--------------------------------------|---------------------------------------
|                                                                             |
Primitive Type(Pre defined )                                Non Primitive(User Defined)
Number                                                                   |
Null                                                                  Object      
String                                                                   |Arrays
Boolean                                                                  |Function   
Undefined                                                                |Dates
BigInt
Symbol                                      


Note
-------
If we want to see the data type of a value we can use typeof operator.
typeof Operator is a unary operator which is used to check the datatype of variable or value.

Number
------
It stores both integer and decimal value.
It also include special values like NaN and Infinity.

String
-------
It stores group of letters or single letter.
In javascript string can be enclosed in ""(Double Quotes,),''(Single Quotes),``(Backticks).

Boolean
--------
It is used to store true or false value.

Undefined
----------
By default javascript value is undefined.
If a variable is declared and not assign a value then it show undefined.

Null
-----
It is a primitive data type which represent intentional absence of an object.
typeof Null is object.

