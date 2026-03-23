//////////////////////////////////////////////////////
// VARIABLES IN JAVASCRIPT                         
//////////////////////////////////////////////////////
 
// A variable is a container used to store data/values

//Declaration
//initialization
//reinitialization
//Redeclaration


//////////////////////////////////////////////////////
// WAYS TO DECLARE VARIABLES
//////////////////////////////////////////////////////
 
// JavaScript has 3 keywords to declare variables:
//   var   → Old way (avoid in modern JS)
//   let   → Modern way (can be changed)
//   const → Modern way (cannot be changed)

//IN ES5 AND EARLIER VERSIONS ONLY VAR IS USED TO DECLARE VARIABLES
// var
EXAMPLE: var userName
          console.log(userName) // undefined (declared but not initialized)
          userName = "Alice" // initialization
          console.log(userName) // Alice
            userName = "Bob" // reinitialization (allowed with var)
          console.log(userName) // Bob
            var userName
            console.log(userName) 

        
//IN ES6 AND LATER VERSIONS LET AND CONST ARE INTRODUCED AND THIS BLOCK SCOPE VARIABLES ARE RECOMMENDED TO USE INSTEAD OF VAR
// let
// EXAMPLE: let age
//             console.log(age) // undefined (declared but not initialized)
//             age = 30 // initialization
//             console.log(age) // 30
//             age = 31 // reinitialization (allowed with let)
//             console.log(age) // 31
//             // let age = 32 // redeclaration (NOT allowed with let) → SyntaxError
// // const
// EXAMPLE: const PI = 3.14
//             console.log(PI) // 3.14
//             // PI = 3.14159 // reinitialization (NOT allowed with const) → TypeError
//             // const PI = 3.14159 // redeclaration (NOT allowed with const) → SyntaxError