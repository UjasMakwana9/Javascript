// Primitive Data types
let userNumber = 123.3
console.log(typeof(userNumber));

let userString = "Hello World"
console.log(typeof(userString));


let userNull = null
console.log(typeof(userNull));


let userBoolean = true;

console.log(typeof(userBoolean));

let userUndefined ;
console.log(typeof(userUndefined));


let val1 = Symbol("hello")
let val2 = Symbol("hello")
console.log(val1===val2)
console.log("")

// Non-Primitive

const userArray = ["hello","this","is","array"]
// console.log(userArray[0][0]);  It works
console.log(typeof(userArray) + "\n");

const userFunction = function(){
    console.log("this is a function");
    return "moj"
}
console.log(typeof(userFunction));
console.log(userFunction()+ "\n");

const userObj = {
    key : "value",
    this : 99
}
console.log(typeof(userObj)+ "\n");
console.table([userObj["key"],userObj["this"]]);


// Data Type Summaray


// Types of Memorys
// Primitives are assigned in Stack Memory where the copy is passed to the variable
// Non-Primitives are assigned in Heap Memory where the reference is passed to the variable

let userStack1 = "This is value 1"
let userStack2 = userStack1
// Now here the copy os userStack1 is being passed to userStack2 
userStack2 = "Here the Value is changed"

console.log(userStack1);
console.log(userStack2);

// For Non- Primitive values

let userHeap1 = ["this","is","a","dell","laptop"]
let userHeap2 = userHeap1
// Here the reference of userHeap1 is passed to userHeap2 so any change made in userHeap2  directly changes is original value 

userHeap2[0]="THIS"

console.log(userHeap1);
console.log(userHeap2);
