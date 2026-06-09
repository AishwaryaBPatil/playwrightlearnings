// ============================================
// Chapter 12 - Functions | Interview Questions
// Topics: declaration, parameters, return, expressions, arrow, IIFE, default,
//         rest, spread, scope, closures, higher-order, pure functions
// ============================================

// Q1. What is the difference between a function declaration and a function expression?
// Demonstrate with hoisting behavior.
console.log(declaredFn());
function declaredFn() {
    return "Function declaration - hoisted!";
}
// console.log(expressedFn()); // ReferenceError: Cannot access before initialization
let expressedFn = function () {
    return "Function expression - not hoisted!";
};
console.log(expressedFn());

// Q2. Write an arrow function that takes any number of arguments using rest parameters
// and returns an object with { sum, average, count }.
const calculateStats = (...numbers) => {
    let sum = numbers.reduce((a, b) => a + b, 0);
    return {
        sum,
        average: numbers.length > 0 ? sum / numbers.length : 0,
        count: numbers.length
    };
};
console.log(calculateStats(10, 20, 30, 40));

// Q3. Write an IIFE that creates a module for managing a test suite with addTest, runAll, and getResults methods.
// Expected: encapsulated test suite with closure
const testSuite = (function () {
    let tests = [];
    return {
        addTest: function (name, fn) {
            tests.push({ name, fn, status: "pending" });
        },
        runAll: function () {
            tests.forEach(t => {
                try {
                    t.fn();
                    t.status = "PASS";
                } catch (e) {
                    t.status = "FAIL";
                }
            });
        },
        getResults: function () {
            return tests.map(t => `${t.name}: ${t.status}`);
        }
    };
})();
testSuite.addTest("Login Test", () => { if (true) return true; });
testSuite.addTest("Logout Test", () => { if (true) return true; });
testSuite.runAll();
console.log(testSuite.getResults());

// Q4. Write a higher-order function called `retry` that takes a function and a max retry count.
// It returns a new function that retries the original function up to max times on failure.
function retry(fn, maxAttempts) {
    return function (...args) {
        for (let i = 1; i <= maxAttempts; i++) {
            try {
                return fn(...args);
            } catch (error) {
                console.log(`Attempt ${i} failed: ${error.message}`);
                if (i === maxAttempts) throw error;
            }
        }
    };
}
let attemptCount = 0;
let flakyApi = retry(() => {
    attemptCount++;
    if (attemptCount < 3) throw new Error("Server error");
    return "Success!";
}, 3);
console.log(flakyApi());

// Q5. Explain pure vs impure functions. Convert this impure function into a pure one.
// Impure version:
let totalScore = 0;
function addScoreImpure(points) {
    totalScore += points;
    return totalScore;
}
// Pure version:
function addScorePure(currentScore, points) {
    return currentScore + points;
}
console.log("Impure:", addScoreImpure(10), addScoreImpure(20));
console.log("Pure:", addScorePure(0, 10), addScorePure(0, 20));
