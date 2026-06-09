// ============================================
// Chapter 01 - Basics | Interview Questions
// Topics: console.log, let, for loop, functions, process object
// ============================================

// Q1. Write a function that prints "Hello, World!" to the console using console.log().
// Expected: Hello, World!
function printHello() {
    console.log("Hello, World!");
}
printHello();

// Q2. Declare a variable using `let` to store your name and print it.
// Expected: Your name
let name = "Aishwarya";
console.log(name);

// Q3. Write a for loop that prints numbers from 1 to 5.
// Expected: 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Q4. Write a function called `add` that takes two numbers and returns their sum. Call it and print the result.
// Expected: 15
function add(a, b) {
    return a + b;
}
console.log(add(10, 5));

// Q5. Write a script that prints the current Node.js version and platform using the process object.
// Expected: e.g., v20.11.0 and win32
console.log("Node.js Version:", process.version);
console.log("Platform:", process.platform);
