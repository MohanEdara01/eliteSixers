// dataTypes    : A data type tells what kind of value a variable is holding

// datatypes are two types
// 1. Primitive data types
// 2. Non-primitive data types


// Primitive data types: These are the basic data types that hold a single value

// String: A string is a sequence of characters enclosed either in single or double quotes
let firstName = "Bala";
let lastName = 'Mohan';
// console.log(`${firstName} ${lastName}`)

let fullName = `${firstName} ${lastName}`
console.log(fullName)
// Number: A number can be an integer or a floating-point value
let age = 30;
let price = 19.99;  
console.log(age);
// Boolean: A boolean represents a logical value that can be either true or false
let isStudent = true;
let hasLicense = false; 
console.log(isStudent);
// Null

let userCity = null;
console.log(userCity);

// Undefined: A variable that has been declared but not assigned a value is undefined
let userCountry;
console.log(userCountry);

// Symbol: A symbol is a unique and immutable data type that can be used as an identifier for object properties
let id = Symbol('id');
console.log(id);

// BigInt: A BigInt is a numeric data type that can represent large integers of the number type
let bigNumber = BigInt(123456789012345678901234567890);
console.log(bigNumber);

// Non-primitive data types: These are complex data types that can hold multiple values or properties

// array: An array is an ordered collection of values that can be of any data type
let userinformation = ["Bala", "Mohan", 30, true , null , undefined];
console.log(userinformation[4]);

// object: An object is a collection of key-value pairs that can hold any data type as its value    
let userdeatils = {
    name: "Bala",
    age: 30,
    isStudent: true,
    city: null,
    country: undefined
}
console.log(userdeatils.age);

// array of objects: An array of objects is a collection of objects that can be used to represent a list of items
let users = [
    { id: 1, name: "Prasad", age: 25, city: "Hyderabad" },
    { id: 2, name: "Rahul", age: 28, city: "Bangalore" },
    { id: 3, name: "Anjali", age: 23, city: "Chennai" },
    { id: 4, name: "Sneha", age: 26, city: "Mumbai" }
];
console.log(users[3].city);