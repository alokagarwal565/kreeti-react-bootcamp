// 1. First letter of every word
 
function first_letter(str) {
    return str
    .split(" ")
    .map(word=> word.charAt(0))
    .join("");
}

const str = "Azad Ram Madha Yash";

console.log(first_letter(str)); // Output: ARMY

// 2. Sum of positive numbers

const nums = [1, -4, 12, 0, -3, 29, -150];

const sum_positive = nums.filter(x=> x>0).reduce((acc,n)=> (acc+n), 0);

console.log(sum_positive); //Output 42

// 3. Square of each element

const arr = [1, 2, 3, 4, 5];

const square = arr.map(n=> n*n);

console.log(square); // Output: [1, 4, 9, 16, 25]

// 4. Function returning a function (Closure)

function multiplyBy (x) {
    return function (y) {
        return x*y;
    };
}

const double = multiplyBy(2);
console.log(double(10)); // Output: 20

// 5. Pangram check

function isPangram (str) {
    const set = new Set (str.toLowerCase().match(/[a-z]/g));
    return set.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello World")); // false