// Q5. Write a function that reverses a string using a for loop

let name = "aishwarya";
let rev = "";

for (let i = name.length - 1; i >= 0; i--) {
    rev = rev + name.charAt(i);
}

console.log(rev);