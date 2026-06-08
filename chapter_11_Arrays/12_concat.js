let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9];
console.log(a.concat(b));
//spread concat
let d = [...a, ...b];
console.log(d);

//join
let arr = ["pass", "fail", "skip"].join("-");
console.log(arr);
