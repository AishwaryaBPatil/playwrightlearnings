// ============================================
// Chapter 03 - Identifier & Literals | Interview Questions
// Topics: identifier rules, naming conventions, comments, unicode identifiers
// ============================================

// Q1. Which of the following are valid JavaScript identifiers? Explain why or why not.
// let 1name, _value, $price, my-var, my_var, let, MyName, const
let _value = 10;
let $price = 99.99;
let my_var = "valid";
let MyName = "Aishwarya";
console.log(_value, $price, my_var, MyName);
// Invalid: 1name (starts with digit), my-var (contains hyphen), let (reserved), const (reserved)

// Q2. Demonstrate that JavaScript identifiers are case-sensitive by creating three variables that differ only in case.
// Expected: three different values
let myVar = "camelCase";
let MyVar = "PascalCase";
let MYVAR = "UPPERCASE";
console.log(myVar, MyVar, MYVAR);

// Q3. Write a variable name using each naming convention: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE.
let userName = "Aishwarya";
let UserProfile = function () { return "profile"; };
let user_age = 25;
const MAX_RETRY_COUNT = 3;
console.log(userName, UserProfile(), user_age, MAX_RETRY_COUNT);

// Q4. Create a variable using a Unicode escape sequence as an identifier name. Print its value.
// Expected: works with \u0041 (which is "A")
let \u0041ge = 30;
console.log(Age);

// Q5. Write a function called `calculateTotalPrice` that takes two parameters (price, quantity) and returns the total.
// Use proper camelCase naming throughout. Add single-line and multi-line comments explaining the logic.
function calculateTotalPrice(price, quantity) {
    /*
     * This function calculates the total price
     * by multiplying price with quantity
     */
    let totalPrice = price * quantity; // single line comment
    return totalPrice;
}
console.log(calculateTotalPrice(100, 5));
