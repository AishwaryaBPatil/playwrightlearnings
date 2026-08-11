let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];


let sumof = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(sumof);

//map is used to convert new array
//reduce is used to make one output 
//0 is used to initial value 
// reduce only takes two values so a+b is used 
//0+85=85 , 85+90=175, 175+78=253


let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        console.log(suiteResults[i][j]);
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }

    }

}

let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]