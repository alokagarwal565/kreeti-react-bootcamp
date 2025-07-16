// 1. Creating Arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3, 4);

// 2. Arrays are dynamic - can hold any type and mixed types - Dynamically typed
const mixed = [1, "two", true, null, { a: 5 }, [6, 7]];


// 3. Arrays are mutable. Array Length is mutable, compare arrays
mixed.length = 2; // Truncates the array
console.log(mixed);

// 5. Arrays are objects
console.log(typeof fruits);

//push, pop, shift, unshift and performance of them
// 6. Push adds to the end, Pop removes from the end
fruits.push("date");
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'cherry']

// 7. Shift removes from the start, Unshift adds to the start
fruits.shift();
console.log(fruits); // ['banana', 'cherry']
fruits.unshift("apple");
console.log(fruits); // ['apple', 'banana', 'cherry']

// 8. Spread operator
const extended = [...fruits, "date"];
console.log(extended); // ['apple', 'banana', 'cherry', 'date']

// 9. Rest with destructuring
const [head, ...rest] = numbers;
console.log(head);
console.log(rest);


console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello World")); // false


// 10. Array methods
// forEach, map, filter, reduce, sort, reverse
const nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach((num) => {
  console.log(num);
});

// map
const doubled = nums.map((num) => num * 2);
console.log(doubled);

// filter
const evens = nums.filter((num) => num % 2 === 0);
console.log(evens);

// reduce
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);

// sort
const sorted = nums.sort((a, b) => b - a);
console.log(sorted);

// reverse
const reversed = nums.reverse();
console.log(reversed);

// compare arrays => we cannot compare arrays directly using == or ===
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false, because they are different references
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true, because we compare their stringified versions

