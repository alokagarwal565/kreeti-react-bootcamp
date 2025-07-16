// // Functions in JS
// // What is a function?  How to write functions in JS (the structure)

// function functionName(parameters) {
//   // code to execute
//   return result;
// }

// // Arguments, default args

// function greet(name = "Guest") {
//   console.log (`Hello, ${name}!`);
// }

// greet()

// // rest operator


function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Function declaration , function expression
// Function hoisting - why function expressions are not hoisted.  For var we get TYpeError and for let and const we get reference error. Temporal Dead Zone
// Function are first class citizen in JS



// Assign to a variable
// const greet = function(name) {
//   return `Hello, ${name}`;
// };

// Pass as argument
// function callFunction(fn, value) {
//   console.log(fn(value));
// }

// callFunction(greet, "Alice");

// function myInfo(branch, college, fullName) {
//   return `I am ${fullName()}, from ${branch} branch, studying in ${college}`;
// }




// Higher order functions, Pure functions, callback function, IIFE


// Try to understand this

// function withLogging(fn) {
//   return function(...args) {
//     console.log("Calling function with args:", args);
//     return fn(...args);
//   };
// }

// const add = (a, b) => a + b;
// const loggedAdd = withLogging(add);

// console.log(loggedAdd(2, 3)); // Logs args and returns 5




// // Pure functions - no side effects, same input always gives same output
function square(x) {
  return x * x;
}

// console.log(square(4)); // 16


// ❌ Impure Function: side effects, relies on external state


// let count = 0;
// function increment() {
//   count++;
// }


// function greet(name, callback) {
//   const message = `Hi, ${name}`;
//   callback(message);
// }

// greet("John", function(msg) {
//   console.log(msg);
// });

// IIFE - Immediately Invoked Function Expression

// (function () {
//   console.log("This runs immediately!");
// })();


// Arrow functions & usage - diff between normal function and arrow function
// Traditional function


// function add(a, b) {
//   return a + b;
// }

// // Arrow function
// const add = (a, b) => a + b;


// function is also an object in JavaScript, and it has properties like `name` and `length`.

// function add(a, b) {
//   return a + b;
// }

// console.log(add.name);
// console.log(add.length);


var fun = (firstName, lastName)=> {  console.log(`Hello, ${firstName} ${lastName}!`);}

fun("John", "Doe"); // "Hello, John Doe!"