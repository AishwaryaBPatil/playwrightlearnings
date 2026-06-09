// ============================================
// Chapter 09 - User Input | Interview Questions
// Topics: prompt, readline, prompt-sync, Number conversion
// ============================================

// Q1. Write a function that simulates taking user input as a string and converts it to a number.
// Handle the case where the input is not a valid number.
function parseUserInput(input) {
    let num = Number(input);
    if (Number.isNaN(num)) {
        return "Invalid input: not a number";
    }
    return num;
}
console.log(parseUserInput("42"));
console.log(parseUserInput("hello"));
console.log(parseUserInput("3.14"));

// Q2. Write a function that takes a string input from the user and checks if the number is even or odd.
function checkEvenOdd(input) {
    let num = Number(input);
    if (Number.isNaN(num)) return "Not a number";
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd("10"));
console.log(checkEvenOdd("7"));
console.log(checkEvenOdd("abc"));

// Q3. Write a function that simulates a login prompt: takes username and password as parameters,
// validates them, and returns "Login Successful" or "Invalid credentials".
function simulateLogin(username, password) {
    if (username === "admin" && password === "pass123") {
        return "Login Successful";
    }
    return "Invalid credentials";
}
console.log(simulateLogin("admin", "pass123"));
console.log(simulateLogin("admin", "wrong"));

// Q4. Write a function that takes a string input and determines its type using typeof after Number conversion.
// Demonstrate what happens with empty string, spaces, null string, and boolean strings.
function analyzeInput(input) {
    let num = Number(input);
    return {
        original: input,
        converted: num,
        isNaN: Number.isNaN(num),
        type: typeof num
    };
}
console.log(analyzeInput(""));
console.log(analyzeInput("  "));
console.log(analyzeInput("42"));
console.log(analyzeInput("true"));

// Q5. Write a function that simulates reading multiple inputs (name, age, city)
// and returns a formatted user profile object.
function createUserProfile(name, age, city) {
    let parsedAge = parseInt(age);
    return {
        name: name.trim(),
        age: Number.isNaN(parsedAge) ? 0 : parsedAge,
        city: city.trim(),
        isValid: name.trim().length > 0 && !Number.isNaN(parsedAge) && parsedAge > 0
    };
}
console.log(createUserProfile("Aishwarya", "25", "Bangalore"));
console.log(createUserProfile("", "abc", ""));
