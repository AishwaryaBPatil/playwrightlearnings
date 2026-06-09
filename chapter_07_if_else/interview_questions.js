// ============================================
// Chapter 07 - If/Else | Interview Questions
// Topics: if-else, nested if-else, truthy/falsy, real-world QA scenarios
// ============================================

// Q1. Write a function that takes a marks value (0-100) and returns the grade:
// A (>=90), B (>=75), C (>=50), D (>=35), Fail (<35). Use if-else if-else chain.
function getGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else if (marks >= 35) return "D";
    else return "Fail";
}
console.log(getGrade(92));
console.log(getGrade(78));
console.log(getGrade(55));
console.log(getGrade(40));
console.log(getGrade(20));

// Q2. Write a function that determines if a year is a leap year.
// Rules: divisible by 4 AND (not divisible by 100 OR divisible by 400).
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));

// Q3. Write a function that classifies an HTTP status code:
// 2xx = "Success", 3xx = "Redirection", 4xx = "Client Error", 5xx = "Server Error", else "Unknown".
function classifyStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    else if (code >= 300 && code < 400) return "Redirection";
    else if (code >= 400 && code < 500) return "Client Error";
    else if (code >= 500 && code < 600) return "Server Error";
    else return "Unknown";
}
console.log(classifyStatus(200));
console.log(classifyStatus(404));
console.log(classifyStatus(500));

// Q4. What is the output? Explain truthy and falsy values in JavaScript.
// Expected: "truthy", "falsy", "falsy", "truthy", "falsy", "truthy"
if ("hello") console.log("truthy");
if (0) console.log("falsy"); else console.log("falsy");
if (null) console.log("truthy"); else console.log("falsy");
if ([]) console.log("truthy");
if (NaN) console.log("truthy"); else console.log("falsy");
if ({}) console.log("truthy");

// Q5. Write a function that takes (expected, actual) test results and returns:
// "PASS" if they match, "FAIL: Expected X but got Y" if they don't.
function verifyTestResult(expected, actual) {
    if (expected === actual) {
        return "PASS";
    } else {
        return `FAIL: Expected ${expected} but got ${actual}`;
    }
}
console.log(verifyTestResult("Login Successful", "Login Successful"));
console.log(verifyTestResult("Dashboard", "Error Page"));
