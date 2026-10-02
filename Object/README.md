Object
----------
Object is a real world entity which is combination of state and Behaviour.

State represents the data of the object.
Behaviour repredsents the functionality of an object.

Ex:
 if mobile is a object

 RAM is the data.

 Capturing is a functionality.

In javascript we can write object in 2 ways.
1. Object Literal
2. Object Constructor

1. Object Literal
Ex:
let obj = {};
console.log(obj);

2. Object Constructor
Ex:
let obj = new Object();
console.log(obj);


* Both are doing same work but written style is different.

two access the property of object we use .notation and []notation.


.notation look the object to check the property.(Static)(can't access invalid identifier)
[]notation we can take the user input to enter property.(Dynamic)(can access invalid  identifier);


<!-- Object Method -->
 
object.keys()  return keys  in array of  
object.values()   return the only values in arrays
object.entries() return both key and value in arrays
like

Object.assign()
we have to pass the source.
If you want to add one more value or update one value that is exitsit update the new value.

