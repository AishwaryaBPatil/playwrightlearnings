//ternary operator
let age = 20;
let age_required = age > 18 ? "you are eligible" : "not eligible";
console.log(age_required);

let marks = 15;
let result = marks > 90 ? "A" : marks > 80 ? "B"
    : marks > 60 ? "C" : "fail";
console.log(result);

//Maximum of two numbers 

/*a = 10; b = 20;
let max = a > b ? a + " a is greater" : b + " b is greater";
console.log(max);*/

// if numbers are same and you have to find maximum

/*let a = 5, b = 5;
let max_number = a > b ? a + "a is greater" : b > a ? b + "b is greater" : "Both are equal";
console.log(max_number);*/

// the maximum between the three numbers, also by using ternary over 

let a = 10, b = 20, c = 30;
let max_num = a > b ? (a > c ? a + "a is greater" : c + "c is greater")
    : (b > c ? b + " b is greater" : c + " c is greater");
console.log(max_num);

