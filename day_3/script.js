// String Interpolation

// const myName = "Alok";
// const message = (`Hi! I am ${myName}.`);
// console.log(message);

// Object Destructuring

// const person = {myName: "Alok", age: 21}; // dont use name it is a keyword
// const {myName, age} = person;
// console.log("Object Destructuring: ", myName, age);

// renaming variables in object destructing

// const person = {myName: "Alok", age: 21}; // dont use name it is a keyword
// const {myName: name, age} = person;
// console.log("Object Destructuring: ", name, age);

// Nested Destructing

// const user = {
//     id:101,
//     profile: {
//         firstName: "Alok",
//         lastName: "Agarwal",
//     },
// };
// const{profile} = user;
// const{firstName, lastName} = profile;

// console.log(`Hi! I am ${firstName} ${lastName}`);

//or
//before ec6

// const user = {
//     id:101,
//     profile: {
//         firstName: "Alok",
//         lastName: "Agarwal",
//     },
// };
// const{firstName, lastName} = user.profile;

// console.log(`Hi! I am ${firstName} ${lastName}`);

// default parameters

// before es6

// function greet(name) {
//     if (typeof name === "undefined") {
//         name = "Guest"
//     }

//     console.log("Hello! "+name);
// }

// greet();
// greet("Alok");

// after

// function greet(name = "Guest") {
//     console.log("Hello! "+name);
// }

// greet();
// greet("Alok");

// arrow function

// for loop

// list = [1,2,3];

// for(no of list){
//     console.log(no);
// }

// map function

// nums = [1,2,3];
// const arr = nums.map((no)=> console.log(no));

// nums = [1,2,3];
// const arr = nums.map((no)=>(no*no));
// console.log(arr);

