// function fullname (first,second) {
//     return first + " " + second;
// }

// var first = "Alok";
// var second = "Agarwal";

// console.log(fullname(first,second))

// ============================================================
// function fullname (first = "Alok",second = "Agarwal") {
//     return first + " " + second;
// }

// var first;
// var second;

// console.log(fullname(first,second))

// ============================================================

// function fullname (first = "Alok",second = "Agarwal") {
//     return first + " " + second;
// }

// var first;
// var second;

// console.log(fullname(first,second,52))

// ============================================================

// function fullname (first = "Alok",second = "Agarwal", ...manyMoreArgs) { //rest operator
//     return first + " " + second + " " + manyMoreArgs;
// }

// var first;
// var second;

// console.log(fullname(first,second,52, "test"));

// ==============================================================

// fullname(first,second,52, "test"); //hoisting not working

// var a = function fullname (first = "Alok",second = "Agarwal", ...manyMoreArgs) {
//     return first + " " + second + " " + manyMoreArgs;
// }

// var first;
// var second;

// console.log(fullname(first,second,52, "test"));

// var first;
// var second;
// console.log(fullname(first,second,52, "test")); //hoisting working

// function fullname (first = "Alok",second = "Agarwal", ...manyMoreArgs) {
//     return first + " " + second + " " + manyMoreArgs;
// }

//===================================================================================

// function fullname (first = "Alok",second = "Agarwal", ...manyMoreArgs) { //rest operator
//     return first + " " + second + " " + manyMoreArgs;
// }

// function myinfo (fullname, branch, year, ...manyMoreArgs) {
//     return fullname() + "" + branch + " " + year;
// }

// var branch = "CSE";
// var year = "4th";


// console.log(myinfo(fullname,branch,year));

//===================================================================================

// function fullname (first = "Alok",second = "Agarwal", ...manyMoreArgs) { //rest operator
//     return first + " " + second + " " + manyMoreArgs;
// }

// function myinfo (fullname, branch, year, ...manyMoreArgs) {
//     return `I am ${fullname()} from ${branch} of ${year}`; //string interpolation
// }

// var branch = "CSE";
// var year = "4th";


// console.log(myinfo(fullname,branch,year));

//===================================================================================

//pure function

// function square (x) {
//     return x*x;
// }

// var x = 2;
// console.log(square(x));

//impure function
// let count = 0;
// function c () {
//     return count++;
// }

// console.log(c(count));
// console.log(c(count));

//===========================================

//arrow function

// var func = (a,b)=> {console.log(`Hello, ${a} ${b}!`);}

// var a = "Alok";
// var b = "Agarwal";
// func(a,b);

//===========================================

//array

//1. creating array

// const fruits = ['apple', 'banana', 'mango'];
// console.log(fruits);

// const fruits = ['apple', 'banana', 'mango'];
// console.log(typeof(fruits));

//===========================================

// const fruits = ['apple', 'banana', 'mango'];

// fruits.push('alok'); //add to last
// console.log(fruits);

//===========================================

// const fruits = ['apple', 'banana', 'mango'];

// fruits.unshift('alok', 'jiya'); //add to first
// console.log(fruits);

//===========================================

// const fruits = ['apple', 'banana', 'mango'];

// fruits.pop(); // remove end element
// console.log(fruits);

//===========================================

// const fruits = ['apple', 'banana', 'mango'];

// fruits.shift(); // remove 1st element
// console.log(fruits);

//===========================================

//splish for removing
// const fruits = ['apple', 'banana', 'mango'];

// console.log(fruits); 

//===========================================

//array de structuring
// numbers = [1,2,3,4,5]
// const [head, ...rest] = numbers;
// console.log(head);
// console.log(rest);

//===========================================

// check pangram hw

//===========================================

// map filter reduce array operation hw

//===========================================

// flat operation hw
// to pass depth
// ek array se andar bohot array hai

//===========================================
