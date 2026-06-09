// ============================================
// Chapter 05 - Literals | Interview Questions
// Topics: string/number/boolean/null/undefined literals, typeof, BigInt, NaN, template literals
// ============================================

// Q1. What is the output of each typeof? Explain the quirks.
// Expected: "string", "number", "object", "undefined", "boolean"
console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);

// Q2. What is the difference between `null == undefined` and `null === undefined`? What does each return?
// Expected: true (loose), false (strict)
console.log(null == undefined);
console.log(null === undefined);

// Q3. What is the output? Demonstrate NaN behavior.
// Expected: NaN, "number", false, false
let result = 0 / 0;
console.log(result);
console.log(typeof result);
console.log(result === NaN);
console.log(result == NaN);
console.log(Number.isNaN(result));

// Q4. Write code using template literals that creates a test report string with variable interpolation and multi-line output.
// Expected: formatted test report
let testName = "Login Test";
let status = "PASS";
let duration = 2.5;
let report = `
Test Report
-----------
Test: ${testName}
Status: ${status}
Duration: ${duration}s
Result: ${status === "PASS" ? "Success" : "Failure"}
`;
console.log(report);

// Q5. What are the values of each expression? Demonstrate BigInt and Number limits.
// Expected: demonstrate BigInt usage, MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991n + 1n);
console.log(typeof 42n);
console.log(Number.isSafeInteger(9007199254740992));
