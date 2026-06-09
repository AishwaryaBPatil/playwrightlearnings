// ============================================
// Chapter 04 - JavaScript Basis | Interview Questions
// Topics: var, let, const, hoisting, TDZ, block scope, function scope
// ============================================

// Q1. What is the output? Explain the difference between `var` and `let` in a for loop.
// Expected: var prints 5 five times; let prints 0,1,2,3,4
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 5; j++) {
    setTimeout(() => console.log("let:", j), 100);
}

// Q2. What happens when you try to access a `let` variable before its declaration? Name the concept.
// Expected: ReferenceError - Temporal Dead Zone (TDZ)
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a);

// Q3. What is the output? Explain how `const` behaves with objects.
// Expected: Can modify properties but cannot reassign the variable
const user = { name: "Aishwarya", role: "QA" };
user.role = "SDET";
console.log(user);
// user = { name: "New" }; // TypeError: Assignment to constant variable

// Q4. What is the output? Explain var hoisting behavior.
// Expected: undefined, then 5
console.log(x); // undefined (hoisted but not initialized)
var x = 5;
console.log(x); // 5

// Q5. What is the output? Explain block scoping with `let` and shadowing.
// Expected: 20, 10
let value = 10;
if (true) {
    let value = 20;
    console.log("Inside block:", value);
}
console.log("Outside block:", value);
