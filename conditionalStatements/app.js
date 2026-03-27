// conditoional statements : cs are used to perform different actions based on different conditions.

// 1. if statement: The if statement is used to execute a block of code if a specified condition is true.

// 2. if...else statement: The if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.

// 3. else if statement: The else if statement is used to specify a new condition to test, if the first condition is false.

// 4. switch statement: The switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if...else statements.

// 5. ternary operator: The ternary operator is a shorthand for the if...else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.


// syntax of if statement :
// if (condition) {
//     // code to be executed if the condition is true
// }

// syntax of if...else statement :
// if (condition) {
//     // code to be executed if the condition is true
// } else {
//     // code to be executed if the condition is false
// }    

// syntax of else if statement :
// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if both condition1 and condition2 are false
// }

// syntax of switch statement :
// switch (expression) {
//     case condition1:
//         // code to be executed if expression matches condition1
//         break;
//     case condition2:
//         // code to be executed if expression matches condition2
//         break;
//     default:
//         // code to be executed if expression does not match any case
// }

// syntax of ternary operator :
// (condition) ? value_if_true : value_if_false


// Exammple of if statement :
let num1 = 10;
if (num1 > 5) {
    console.log("num1 is greater than 5");
}

// Example of if...else statement :
let num2 = 3;
if (num2 > 5) {
    console.log("num2 is greater than 5");
} else {
    console.log("num2 is not greater than 5");
}

// Example of else if statement :
let num3 = 7;
if (num3 > 10) {
    console.log("num3 is greater than 10");
} else if (num3 > 5) {
    console.log("num3 is greater than 5 but not greater than 10");
}else if (num3 > 0) {
    console.log("num3 is greater than 0 but not greater than 5");
} else {
    console.log("num3 is not greater than 5");
}

// Example of switch statement :
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Example of ternary operator :
let num4 = 10;
let result = (num4 > 5) ? "num4 is greater than 5" : "num4 is not greater than 5";
console.log(result);

