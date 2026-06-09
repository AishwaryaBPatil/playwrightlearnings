// ============================================
// JAVASCRIPT INTERVIEW QUESTIONS
// Complete Collection - All Chapters
// ============================================

// ============================================
// CHAPTER 01 - BASICS
// Topics: console.log, let, loops, functions, process object
// ============================================

// Q1. Write a function that prints numbers 1-100, but for multiples of 3 print "Fizz",
// for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz"

// Q2. Create a function that takes a name and returns a greeting using template literals

// Q3. Write a for loop that calculates the sum of numbers from 1 to 100

// Q4. Create a function that uses the process object to display system information
// (platform, architecture, Node version)

// Q5. Write a function that reverses a string using a for loop


// ============================================
// CHAPTER 02 - JAVASCRIPT CONCEPTS
// Topics: var keyword, redeclaration, reassignment
// ============================================

// Q1. Demonstrate how `var` allows redeclaration but `let` doesn't - show the error

// Q2. Write code showing how `var` leaks out of block scope (if statement)

// Q3. Create a scenario where `var` in a for loop causes unexpected behavior with setTimeout

// Q4. Show how `var` can be reassigned to different data types

// Q5. Demonstrate the difference between function-scoped `var` and block-scoped `let`


// ============================================
// CHAPTER 03 - IDENTIFIER & LITERALS
// Topics: identifier rules, naming conventions, comments, unicode identifiers
// ============================================

// Q1. Which identifiers are valid: `1name`, `_value`, `$price`, `my-var`, `let`, `MyName`?
// Explain why

// Q2. Create three variables that differ only in case to demonstrate case-sensitivity

// Q3. Write variables using all naming conventions: camelCase, PascalCase, snake_case,
// SCREAMING_SNAKE_CASE

// Q4. Create a variable using Unicode escape sequence (`\u0041`)

// Q5. Write a function with proper camelCase naming and add both single-line and
// multi-line comments


// ============================================
// CHAPTER 04 - JAVASCRIPT BASIS
// Topics: var, let, const, hoisting, TDZ, block scope, function scope
// ============================================

// Q1. What's the output: `console.log(x); var x = 5;`? Explain hoisting

// Q2. What happens when you access a `let` variable before declaration? Name the concept

// Q3. Show how `const` behaves with objects - can you modify properties?

// Q4. Demonstrate the difference between `var` and `let` in a for loop with setTimeout

// Q5. What's the output when a block-scoped `let` shadows a global variable?


// ============================================
// CHAPTER 05 - LITERALS
// Topics: string/number/boolean/null/undefined literals, typeof, BigInt, NaN, template literals
// ============================================

// Q1. What does `typeof null` return? Why is it considered a quirk?

// Q2. What's the difference between `null == undefined` and `null === undefined`?

// Q3. What is `NaN`? What does `typeof NaN` return? How do you check for NaN?

// Q4. Create a multi-line template literal with variable interpolation and expression evaluation

// Q5. Demonstrate BigInt usage and show `Number.MAX_SAFE_INTEGER`


// ============================================
// CHAPTER 06 - OPERATORS
// Topics: assignment, arithmetic, modulus, exponentiation, compound, comparison,
//         strict/loose equality, logical, ternary, typeof, increment/decrement
// ============================================

// Q1. What's the output: `console.log(5 == "5")` vs `console.log(5 === "5")`?

// Q2. Explain why `"" == 0`, `"0" == 0`, but `"" != "0"` (transitivity broken)

// Q3. What's the output: `null >= 0`, `null > 0`, `null == undefined`?

// Q4. Demonstrate short-circuit evaluation with `&&` and `||`

// Q5. What's the difference between `a++` and `++a`? Show with examples


// ============================================
// CHAPTER 07 - IF/ELSE
// Topics: if-else, nested if-else, truthy/falsy, real-world QA scenarios
// ============================================

// Q1. Write a grade calculator: A (>=90), B (>=75), C (>=50), D (>=35), Fail (<35)

// Q2. Write a function to check if a year is a leap year

// Q3. Create a function that classifies HTTP status codes (2xx, 3xx, 4xx, 5xx)

// Q4. What's the output for these truthy/falsy checks: `"hello"`, `0`, `null`, `[]`, `NaN`, `{}`?

// Q5. Write a function that compares expected vs actual test results and returns PASS/FAIL


// ============================================
// CHAPTER 08 - SWITCH STATEMENT
// Topics: switch, break, default, fall-through, grouped cases, switch(true)
// ============================================

// Q1. Write a function that converts day number (0-6) to day name using switch

// Q2. What happens when you remove `break` from a switch case? Demonstrate fall-through

// Q3. Create a function using grouped cases to classify browsers by engine
// (Chrome/Edge -> Blink, Firefox -> Gecko, Safari -> WebKit)

// Q4. Why does `switch(false)` not match `case 0`? Explain strict equality in switch

// Q5. Use the `switch(true)` pattern to implement grade evaluation


// ============================================
// CHAPTER 09 - USER INPUT
// Topics: prompt, readline, prompt-sync, Number conversion
// ============================================

// Q1. Write a function that converts string input to number and handles invalid input

// Q2. Create a function that takes input and checks if the number is even or odd

// Q3. Simulate a login function that validates username and password

// Q4. Write a function that analyzes input types after Number conversion
// (empty string, spaces, etc.)

// Q5. Create a user profile function that takes name, age, city and returns a validated object


// ============================================
// CHAPTER 10 - LOOPS
// Topics: for loop, while loop, do-while, continue, nested loops
// ============================================

// Q1. Write a for loop that prints the multiplication table of 5 (5x1 to 5x10)

// Q2. Use a while loop to calculate the sum of digits of a number (1234 -> 10)

// Q3. Write a do-while loop that simulates a retry mechanism (3 attempts)

// Q4. Use `continue` to skip multiples of 3 in a loop from 1-20

// Q5. Write nested loops to print a right triangle pattern of stars


// ============================================
// CHAPTER 11 - ARRAYS
// Topics: creation, access, push/pop, shift/unshift, splice, searching,
//         iteration, map, filter, reduce, sort, slice, concat, spread, every, some
// ============================================

// Q1. Write a function using `filter` to return only even numbers from an array

// Q2. Use `reduce` to find the maximum value in an array

// Q3. Create a function that uses `map` to uppercase test results and `filter` to count passes

// Q4. Flatten a nested array without using `flat()` (use reduce and concat)

// Q5. Write a function that takes two arrays and returns merged, common, and unique elements


// ============================================
// CHAPTER 12 - FUNCTIONS
// Topics: declaration, parameters, return, expressions, arrow, IIFE, default,
//         rest, spread, scope, closures, higher-order, pure functions
// ============================================

// Q1. What's the difference between function declaration and function expression? Show hoisting

// Q2. Write an arrow function with rest parameters that returns sum, average, and count

// Q3. Create an IIFE that manages a test suite with addTest, runAll, and getResults methods

// Q4. Write a higher-order `retry` function that retries a flaky function up to N times

// Q5. Explain pure vs impure functions with examples


// ============================================
// CHAPTER 13 - STRING METHODS
// Topics: creation, properties, access, search, extract, case, trim, replace,
//         split/join, repeat/pad, concat, conversion, regex, unicode, iteration
// ============================================

// Q1. Write a function to check if a string is a palindrome (ignore case and non-alphanumeric)

// Q2. Create a function that checks if two strings are anagrams

// Q3. Write a function that counts character frequency in a string

// Q4. Convert camelCase to snake_case and vice versa

// Q5. Parse a URL string and extract protocol, domain, path, and query parameters


// ============================================
// END OF INTERVIEW QUESTIONS
// Total: 65 Questions (5 per chapter x 13 chapters)
// ============================================
