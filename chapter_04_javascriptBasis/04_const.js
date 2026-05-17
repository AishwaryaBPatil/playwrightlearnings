const BASE_URL = "https://app.thetestingacademy.com";
console.log(BASE_URL);
//BASE_URL = "https://app.thetestingacademy.com/learn";
// we cannot reassign the value of BASE_URL because it is a constant variable and it will give error that Assignment to constant variable. if we want to reassign the value of BASE_URL then we can use let keyword instead of const keyword.
//Assignment to constant variable error 

const name = "pending";
name = "passed";
console.log(name); // we cannot reassign the value of name because it is a constant variable and it will give error that Assignment to constant variable. if we want to reassign the value of name then we can use let keyword instead of const keyword.

{
    const name1 = "failed";
    console.log(name1);
}