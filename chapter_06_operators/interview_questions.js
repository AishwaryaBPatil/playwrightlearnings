// ============================================
// Chapter 06 - Operators | Interview Questions
// Topics: assignment, arithmetic, modulus, exponentiation, compound, comparison,
//         strict/loose equality, logical, ternary, typeof, increment/decrement
// ============================================

// Q1. What is the output? Explain the difference between == and ===.
// Expected: true, false
console.log(5 == "5");
console.log(5 === "5");

// Q2. What is the output of each expression? Explain the confusing comparisons.
// Expected: true, true, false (transitivity broken!)
console.log("" == 0);
console.log("0" == 0);
console.log("" == "0");

// Q3. What is the output? Explain null comparisons with >= and >.
// Expected: true, false, true (null is treated as 0 in >= but not in >)
console.log(null >= 0);
console.log(null > 0);
console.log(null == undefined);

// Q4. What is the output? Demonstrate logical operators short-circuit evaluation.
// Expected: 0, "hello", true
console.log(0 && "hello");
console.log(0 || "hello");
console.log(!"");

// Q5. What is the output? Explain pre-increment vs post-increment.
// Expected: 5, 6, 7, 6
let a = 5;
console.log(a++);
console.log(a);
let b = 5;
console.log(++b);
console.log(b);
