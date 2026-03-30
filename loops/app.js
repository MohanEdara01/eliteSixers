// Loops : loops are used to repeat a block of code until a specified condition is met.

// Types of loops in JavaScript:

// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...in Loop
// 5. For...of Loop

// 1. For Loop : A for loop is used to repeat a block of code a specific number of times. It consists of three parts: initialization, condition, and increment/decrement.
// Syntax:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

// Example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. While Loop : A while loop is used to repeat a block of code as long as a specified condition is true.
// Syntax:
// while (condition) {
//   // code to be executed
// }

// Example:
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// 3. Do-While Loop : A do-while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.
// Syntax:
// do {
//   // code to be executed
// } while (condition);


// Example:
let k = 0;  
do {
  console.log(k);
  k++;
} while (k < 5);

// 4. For...in Loop : A for...in loop is used to iterate over the properties of an object.
// Syntax:
// for (variable in object) {
//   // code to be executed
// }    

// Example:
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// 5. For...of Loop : A for...of loop is used to iterate over the values of an iterable object, such as an array or a string.
// Syntax:
// for (variable of iterable) {
//   // code to be executed
// }

// Example:
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}