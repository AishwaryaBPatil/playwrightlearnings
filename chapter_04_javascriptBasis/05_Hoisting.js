//JS engine
//line by line ,JIT compilation

console.log(greeting);
var greeting = "hello"; //undefined because of hoisting concept in JavaScript. var declarations are hoisted to the top of their scope and initialized with undefined. so when we try to access the variable greetings before its declaration, it will return undefined instead of throwing an error.

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
console.log(greeting);    //< -- "hello!"
