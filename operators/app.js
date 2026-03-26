// operators : 


// 1. Arithmetic operators: These operators are used to perform mathematical operations on numbers (+ , - , * , / , %)
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction    
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus

// 2. Assignment operators: These operators are used to assign values to variables (= , += , -= , *= , /= , %=)
let num3 = 10;
num3 += 5;
console.log(num3); 
num3 -= 3;
console.log(num3); 
num3 *= 2;          
console.log(num3);
num3 /= 4;          
console.log(num3); 
num3 %= 3;          
console.log(num3);

// 3. Comparison operators: These operators are used to compare two values and return a boolean result (== , === , != , !== , > , < , >= , <=)
let num4 = 10;
let num5 = 5;
console.log(num4 == num5); // Equal to
console.log(num4 === num5);  
console.log(num4 != num5); // Not equal to
console.log(num4 !== num5);    
console.log(num4 > num5); // Greater than
console.log(num4 < num5); // Less than
console.log(num4 >= num5); // Greater than or equal to
console.log(num4 <= num5); // Less than or equal to

// 4. Logical operators: These operators are used to combine multiple boolean expressions and return a boolean result (&& , || , !)
let num6 = 10;
let num7 = 5;
console.log(num6 > num7 && num6 < num7); // Logical AND
console.log(num6 > num7 || num6 < num7); // Logical OR  
console.log(!(num6 > num7)); // Logical NOT

// 5. typeof operator: This operator is used to determine the type of a variable
let num8 = 10;
let str1 = "Hello";
console.log(typeof str1);

// increment and decrement operators: These operators are used to increase or decrease the value of a variable by 1 ( ++ , -- )
let num9 = 10;
num10 = num9++;
console.log(num10 , num9);

let num11 = 10;
num12 = ++num11;
console.log(num12 , num11);

let num13 = 10;
num14 = num13--;
console.log(num14 , num13);

let num15 = 10;
num16 = --num15;
console.log(num16 , num15);
