let score = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//print all the elements
// 3 rows and 3 columns 
for (let i = 0; i < score.length; i++) {
    for (j = 0; j < score[i].length; j++) {
        console.log(score[i][j]);
    }
    console.log("\n");
}

//convert into new arrray - [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
let same = score.map(row => row);
console.log(same);