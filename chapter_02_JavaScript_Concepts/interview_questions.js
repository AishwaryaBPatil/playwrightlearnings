// ============================================
// Chapter 02 - JavaScript Concepts | Interview Questions
// Topics: var keyword, redeclaration, reassignment
// ============================================

// Q1. Declare a variable using `var` with value 10, then redeclare it with value 20. Print the result. What happens?
// Expected: 20 (var allows redeclaration)
var x = 10;
var x = 20;
console.log(x);

// Q2. Declare a variable using `var`, assign it a string, then reassign it to a number. Print both the value and typeof.
// Expected: 42, "number"
var data = "hello";
data = 42;
console.log(data);
console.log(typeof data);

// Q3. What is the output? Explain why `var` behaves this way inside a for loop.
// Expected: 5, 5, 5, 5, 5 (var is function-scoped, not block-scoped)
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}

// Q4. Write code that demonstrates `var` leaking out of an if block. What gets printed?
// Expected: "leaked" (var is not block-scoped)
if (true) {
    var secret = "leaked";
}
console.log(secret);

// Q5. Declare a `var` variable, reassign it multiple times with different data types (string, boolean, array). Print the final value and type.
// Expected: [1,2,3], "object"
var mixed = "text";
mixed = true;
mixed = [1, 2, 3];
console.log(mixed);
console.log(typeof mixed);
