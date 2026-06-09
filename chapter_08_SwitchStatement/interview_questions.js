// ============================================
// Chapter 08 - Switch Statement | Interview Questions
// Topics: switch, break, default, fall-through, grouped cases, switch(true)
// ============================================

// Q1. Write a function that takes a day number (0-6) and returns the day name using switch.
// Include a default case for invalid input.
function getDayName(day) {
    switch (day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day number";
    }
}
console.log(getDayName(1));
console.log(getDayName(7));

// Q2. What is the output? Demonstrate fall-through behavior when break is missing.
// Expected: "Case 1", "Case 2", "Case 3" (all subsequent cases execute)
let num = 1;
switch (num) {
    case 1:
        console.log("Case 1");
    case 2:
        console.log("Case 2");
    case 3:
        console.log("Case 3");
        break;
    case 4:
        console.log("Case 4");
}

// Q3. Write a function using grouped cases that classifies a browser name into its engine:
// "chrome" and "edge" -> "Blink", "firefox" -> "Gecko", "safari" -> "WebKit", default -> "Unknown".
function getBrowserEngine(browser) {
    switch (browser.toLowerCase()) {
        case "chrome":
        case "edge":
            return "Blink";
        case "firefox":
            return "Gecko";
        case "safari":
            return "WebKit";
        default:
            return "Unknown";
    }
}
console.log(getBrowserEngine("chrome"));
console.log(getBrowserEngine("firefox"));
console.log(getBrowserEngine("safari"));

// Q4. What is the output? Explain why switch uses strict equality (===).
// Expected: "Not matched" (false !== 0 with strict equality)
let value = false;
switch (value) {
    case 0:
        console.log("Matched 0");
        break;
    case "":
        console.log("Matched empty string");
        break;
    case false:
        console.log("Matched false");
        break;
    default:
        console.log("Not matched");
}

// Q5. Use the switch(true) pattern to grade a score: >=90 = "A", >=75 = "B", >=50 = "C", else "Fail".
function gradeScore(score) {
    switch (true) {
        case (score >= 90):
            return "A";
        case (score >= 75):
            return "B";
        case (score >= 50):
            return "C";
        default:
            return "Fail";
    }
}
console.log(gradeScore(95));
console.log(gradeScore(80));
console.log(gradeScore(60));
console.log(gradeScore(30));
