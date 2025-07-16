function init () {
    var firstName = "Alok";

    function sayFirstName () {
        console.log(firstName);
    }

    sayFirstName();
}

init();
console.log(firstName); // doesnot work

// 📜 Rules of Lexical Scoping:
// A function can access variables from:

// Inside itself

// Outer functions

// Global scope

// But outer functions cannot access variables from inside inner functions.

