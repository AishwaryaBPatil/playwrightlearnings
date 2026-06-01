let test = ["pass", "fail", "skip"];
console.log(test[0]);
console.log(test[1]);
console.log(test[2]);
console.log(test.at(-1));

//modify
test[1] = "blocked";
console.log(test);