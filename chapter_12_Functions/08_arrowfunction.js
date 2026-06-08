const add = (a, b) => a + b;
let sum = add(2, 3);
console.log(sum);

const result = () => "hi";
let say = result();
console.log(say);

const myname = (name) => "hi" + name;
let my = myname("aishwarya");
console.log(my);

// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 
//multiple line of code in arrow function then use {} and return

const addition = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return sum;
}

addition(3, 4);