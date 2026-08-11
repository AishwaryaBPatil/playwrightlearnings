const user = {
    name: "aishwarya",
    age: 34,
    email: "abcd@gmail.com"
}

console.log(user.name);
console.log(user["age"]);
console.log(user);


//dynamic property access

const key = "age";
console.log(user[key]);

//adding/modifying

user.city = "mumbai";
user.name = "abc";
console.log(user);

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }