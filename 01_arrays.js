//creating array literals
let test = ["pass", "fail"];

//array constructor

let score = new Array(3); //length of array means you can insert 3 elements
score[0] = 1;
score[1] = 1;
score[2] = 1;
score[3] = 14;
score[5] = 34;
console.log(score);
let score1 = new Array(1, 2, 3);
console.log(score1);

let testt = Array.of(1, 2, 3, 4); //another method to create an array
console.log(testt);

//Array.form

let f = Array.from("aishwaryapatil"); //seperate out each characer
console.log(f);
