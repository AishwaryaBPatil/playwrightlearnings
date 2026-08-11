// Q3. Write a for loop that calculates the sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

//another  method
function test(...sum) {
    return sum.reduce((total, num) => total + num, 0)
}

let result = [];
for (let i = 1; i <= 100; i++) {
    result.push(i);
}
let number = test(...result);
console.log(number);

//third method shortcut

let num = 100;
let s = num * (num + 1) / 2;  //100*(100+1)/2 = 100*101=10100/2= 5050
console.log(s);
