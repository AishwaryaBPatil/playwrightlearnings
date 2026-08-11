// Q2. Create a function that takes a name and returns a greeting using template literals

//first method
function myname(name) {
    return `hi my name is ${name} `;
}

let result = myname("aishwarya");
console.log(result);

//second method to solve
let arr = (name) => {
    return `hi ${name}`
};
let res = arr("aishwarya");
console.log(res);



