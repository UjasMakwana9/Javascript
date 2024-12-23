// default import

import getmaterialdata from "./mathOpertaionM.mjs";

console.log(getmaterialdata())
// named import

import {add,sub,getdata} from "./mathOpertaionM.mjs"

console.log(add(10,9));
console.log(sub(10,9));
console.log(getdata());


// The error SyntaxError: Cannot use import statement outside a module occurs because JavaScript's import and export syntax is only available in ES modules (ECMAScript modules). By default, JavaScript files in a Node.js environment are treated as CommonJS modules unless otherwise specified.