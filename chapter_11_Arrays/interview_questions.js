// ============================================
// Chapter 11 - Arrays | Interview Questions
// Topics: creation, access, push/pop, shift/unshift, splice, searching,
//         iteration, map, filter, reduce, sort, slice, concat, spread, every, some
// ============================================

// Q1. Write a function that takes an array of numbers and returns a new array with only the even numbers,
// using the filter method.
function getEvenNumbers(arr) {
    return arr.filter(n => n % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// Q2. Write a function that uses reduce to find the maximum value in an array.
function findMax(arr) {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}
console.log(findMax([3, 7, 2, 9, 1, 5]));

// Q3. Write a function that takes an array of test results and uses map to convert each to uppercase.
// Then use filter to keep only "PASS" results and count them.
function analyzeTestResults(results) {
    let upper = results.map(r => r.toUpperCase());
    let passed = upper.filter(r => r === "PASS");
    return { total: results.length, passed: passed.length, failed: results.length - passed.length };
}
console.log(analyzeTestResults(["pass", "fail", "pass", "skip", "pass", "fail"]));

// Q4. Write a function that flattens a nested array without using flat(), using reduce and concat.
// Then demonstrate the same using the flat() method.
function flattenArray(arr) {
    return arr.reduce((flat, item) =>
        flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}
console.log(flattenArray([1, [2, [3, [4]], 5]]));
console.log([1, [2, [3, [4]], 5]].flat(Infinity));

// Q5. Write a function that takes two arrays and returns an object with:
// - merged: combined array using spread
// - common: elements present in both arrays
// - unique: elements present in only one array
function compareArrays(arr1, arr2) {
    let merged = [...arr1, ...arr2];
    let common = arr1.filter(x => arr2.includes(x));
    let unique = [...arr1.filter(x => !arr2.includes(x)), ...arr2.filter(x => !arr1.includes(x))];
    return { merged, common, unique };
}
console.log(compareArrays([1, 2, 3, 4], [3, 4, 5, 6]));
