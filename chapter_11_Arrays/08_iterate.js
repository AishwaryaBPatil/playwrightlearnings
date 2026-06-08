// Iterate - Go from one to another. // 
let number = [1, 2, 3, 4, 5, 8];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

// for...of (cleanest for values)
for (let num of number) {
    console.log(num);
}

number.forEach((i, index) => {
    console.log(i, index);
});

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

for (let [i, num] of number.entries()) {
    console.log(i, num);
}