// Some important things to learn for datatypes in javascripts

// The Undefined type has exactly one value, called undefined. Any variable that has not been assigned a value has the value undefined.
let users;
console.log(users);
console.log(typeof users + "\n");

// The Null type has exactly one value, called null.
let val = null
console.log(val);
console.log(typeof val);

// String
// The empty String has length zero and therefore contains no elements.
let str1 = ""
console.log(typeof str1);


// These is some confusing part

// This is for Number type

let value = undefined  //This is string
// console.log(value);

console.log("\n"+typeof(value));

// Now it is converted to number
let val2 = Number(value)
console.log(typeof(val2));

// let value = "33c" 
// But if i write any character to value it will give "NaN" value
console.log(val2);

// NaN is also a type

// let value = null
//0

// let value = undefined
// NaN

// let value = true
// 1 

console.log("\n");

// This is for Boolean type
let val3 = "ujas"
console.log(Boolean(val3));

// "String"===> true
// ""===> false
// 1===> true
// 0 ===> false


// This is for String type
let val4 = 33
console.log(/* typeof */String(val4))


// 33 =====> String

