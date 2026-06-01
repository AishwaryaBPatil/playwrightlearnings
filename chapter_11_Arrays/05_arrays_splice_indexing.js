
let score=[1,2,3,4];
score.splice(2, 1); //index 2 remove 1
console.log(score);

score.splice(2, 2); // from index 2 remove next 2
console.log(score);

score.splice(1, 0, 9); //index 1 nothing to remove i.e 0 and add 9 at index 1
console.log(score);

//searching

score.indexof(3);