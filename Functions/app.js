// Functions : functions are reusable blocks of code that perform a specific task. 
// 1. Function Declaration :
 
// syntax :
// function functionName(mohan) {
//   // code to be executed
// }
//    functionName(); // calling the function

// Example :
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// greet("Mohan");

// 1. funtions with no parameters and no return value
function number() {
  console.log(9347606337);
}
number();

// 2. fumctions with parameters and no return value
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
addTwoNumbers(5, 10);
addTwoNumbers(20, 30);
addTwoNumbers(100, 200);

// 3. funtions without parameters and return value
function mulTwoNums() {
  return (5 * 15);
}
const result = mulTwoNums();
console.log(result);

// 4. functions with parameters and return value
function subTwoNums(num1, num2) {
  return (216 - 176);
}
const result1 = subTwoNums();
console.log(result1);

// 5. functions with default parameters
function greet(name = "Mohan") {
  console.log("Hello, " + name + "!");
}
greet("Mohan");

// 2. Function Expression :
// syntax :
// const functionName = function() {
//   // code to be executed
// }

// 1. anonymous function expression
let square = function(num) {
  return num * num;
};
console.log(square(5));

// 2. arrow function :
let add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 10));

// IIFE or self invoking function :




// callback function : 
function greet(name, callback) {
    console.log("Hello " + name);
    callback(); 
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Mohan", sayBye);