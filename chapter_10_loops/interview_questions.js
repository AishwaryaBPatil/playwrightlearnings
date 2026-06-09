// ============================================
// Chapter 10 - Loops | Interview Questions
// Topics: for loop, while loop, do-while, continue, nested loops
// ============================================

// Q1. Write a for loop that prints the multiplication table of 5 (5x1 to 5x10).
// Expected: 5x1=5, 5x2=10, ... 5x10=50
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Q2. Write a while loop that calculates the sum of digits of a number (e.g., 1234 -> 10).
let num = 1234;
let sum = 0;
let temp = num;
while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
}
console.log(`Sum of digits of ${num} = ${sum}`);

// Q3. Write a do-while loop that simulates a retry mechanism: retry up to 3 times until a condition is met.
// Expected: "Attempt 1: Failed", "Attempt 2: Failed", "Attempt 3: Success!"
let attempt = 0;
let maxAttempts = 3;
let successOnAttempt = 3;
do {
    attempt++;
    if (attempt === successOnAttempt) {
        console.log(`Attempt ${attempt}: Success!`);
    } else {
        console.log(`Attempt ${attempt}: Failed`);
    }
} while (attempt < maxAttempts);

// Q4. Write a for loop that prints numbers from 1 to 20 but skips multiples of 3 using `continue`.
// Expected: 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

// Q5. Write a nested loop that prints a right triangle pattern of stars with 5 rows.
// Expected:
// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row.trimEnd());
}
