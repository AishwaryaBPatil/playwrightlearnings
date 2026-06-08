let scores = [45, 82, 91, 60, 73];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);


// filter — keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log("filrer", passing);

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());

let score = [23, 56, 78, 90];
let result = score.map(s => s > 20 ? "pass" : "fail");
console.log(result);

let filter = score.filter(s => s > 45);
console.log(filter);

let red = score.reduce((a, b) => a + b, 0);
console.log(red);
