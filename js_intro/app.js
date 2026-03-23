//////////////////////////////////////////////////////
// HISTORY OF JAVASCRIPT                            
//////////////////////////////////////////////////////

// JavaScript was created in 1995 by Brendan Eich
// It was developed in just 10 days
// First name was Mocha
// Then changed to LiveScript
// Finally renamed to JavaScript (for popularity/marketing)
// Now it is one of the most used languages in the world

//////////////////////////////////////////////////////
// WHAT IS JAVASCRIPT?                              
//////////////////////////////////////////////////////

// JavaScript is a high-level, interpreted, lightweight programming language
// Runs directly in the browser → no installation or compilation needed
// It is the ONLY language that runs natively in all browsers
// Used to make websites interactive and dynamic

// 3 Core Web Technologies:
//   HTML        → Structure  (skeleton of the page)
//   CSS         → Design     (look and feel)
//   JavaScript  → Behavior   (interactivity and logic)

// Real World Examples:
//   → Button clicks and animations
//   → Form validation (check empty fields)
//   → Live search suggestions (Google)
//   → Page content update without reload (YouTube)
//   → Popups, sliders, dropdowns

//////////////////////////////////////////////////////
// JS vs JAVA
//////////////////////////////////////////////////////

// JavaScript and Java are different languages

// Common Mistake: People think JS and Java are related → They are NOT

// JavaScript:
//   - Created by  : Brendan Eich (Netscape) in 1995
//   - Runs on     : Browser / Node.js
//   - Used for    : Web development (frontend + backend)
//   - Typing      : Dynamically typed (no need to declare types)
//   - OOP Style   : Prototype-based (Every object has a hidden parent, if something is missing JS automatically looks up to the parent to find it)
//   - Threading   : Single-threaded (event loop)
//   - Compiled    : Interpreted (line by line)
//   - Difficulty  : Easy to learn

// Java:
//   - Created by  : James Gosling (Sun Microsystems) in 1995
//   - Runs on     : JVM (Java Virtual Machine)
//   - Used for    : Enterprise apps, Android, backend
//   - Typing      : Statically typed (must declare types)
//   - OOP Style   : Class-based (pure OOP)
//   - Threading   : Multi-threaded (true parallel)
//   - Compiled    : Compiled to bytecode first
//   - Difficulty  : Moderate to Hard

// Simple Summary:
//   JavaScript → Web interaction & UI logic
//   Java       → Large scale & enterprise applications

//////////////////////////////////////////////////////
// FEATURES OF JAVASCRIPT
//////////////////////////////////////////////////////

// - Lightweight and fast
// - Runs in browser
// - Dynamically typed
// - Supports event-driven programming
// - Supports asynchronous programming
// - Can be used for frontend and backend (Node.js)
// - Easy to learn for beginners

//////////////////////////////////////////////////////
// PROS AND CONS OF JAVASCRIPT
//////////////////////////////////////////////////////

// Pros:
// - Easy to learn
// - Works in all browsers
// - Fast for web applications
// - Large community support
// - Can build full-stack apps

// Cons:
// - Security issues (runs on client side)
// - Browser differences can cause problems
// - Debugging can be tricky
// - Weak typing may cause errors

//////////////////////////////////////////////////////
// POP vs OOP
//////////////////////////////////////////////////////

// POP (Procedure Oriented Programming):
// - Focus on functions/procedures
// - Data is less secure
// - Example: C language

// OOP (Object Oriented Programming):
// - Focus on objects and classes
// - Data is more secure (encapsulation)
// - Supports reuse (inheritance)
// - Example: Java, JavaScript

// Simple:
// POP → Functions based
// OOP → Objects based

//////////////////////////////////////////////////////
// ASYNC vs DEFER
//////////////////////////////////////////////////////

// Both are used in <script> tag to load JavaScript efficiently

// async:
// - Script loads in parallel (same time as HTML)
// - Executes immediately after loading
// - Does NOT wait for HTML parsing
// - Order is NOT guaranteed

// defer:
// - Script loads in parallel
// - Executes only after HTML is fully loaded
// - Maintains order of scripts

// Simple:
// async → fast but no order
// defer → safe and ordered

//////////////////////////////////////////////////////
// INTEGRATION OF JAVASCRIPT
//////////////////////////////////////////////////////

// JavaScript can be added to HTML in 3 ways


// -----------------------------------------------
// WAY 1 - INLINE JAVASCRIPT
// -----------------------------------------------

// Written directly inside HTML element
// Used for very small and quick tasks
// Not recommended for large code

// Example:
// <button onclick="alert('Hello!')">Click Me</button>

// Simple:
// JS written inside HTML tag itself
// Quick but messy for large projects


// -----------------------------------------------
// WAY 2 - INTERNAL JAVASCRIPT
// -----------------------------------------------

// Written inside <script> tag in same HTML file
// placed inside <head> or at bottom of <body>
// Good for small projects or single page scripts

// Example:
// <html>
//   <head>
//     <script>
//       function greet() {
//         alert("Hello from Internal JS!");
//       }
//     </script>
//   </head>
//   <body>
//     <button onclick="greet()">Click Me</button>
//   </body>
// </html>

// Simple:
// JS written inside <script> tag in same HTML file
// Better than inline but not best for large projects


// -----------------------------------------------
// WAY 3 - EXTERNAL JAVASCRIPT (BEST PRACTICE)
// -----------------------------------------------

// JS code written in separate .js file
// Linked to HTML using <script src=""> tag
// Best approach for all real projects
// Code is clean, reusable and easy to maintain

// File: app.js
//   function greet() {
//     alert("Hello from External JS!");
//   }

// File: index.html
//   <html>
//     <head>
//       <script src="app.js" defer></script>
//     </head>
//     <body>
//       <button onclick="greet()">Click Me</button>
//     </body>
//   </html>

// Simple:
// JS written in separate file → linked to HTML
// Cleanest and most professional approach
