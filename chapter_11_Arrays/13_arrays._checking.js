let array = [1, 2, 3, 4];
let result = Array.isArray("2");
let result1 = Array.isArray([1, 2, 3, 4]);
console.log(result);
console.log(result1);


//every as per consition everything should be valid then it will give true 
[80, 90, 85].every(s => s >= 70); // true
[80, 60, 85].every(s => s >= 70); // false

//some at least one 

console.log([90, 80].some(p => p > 90)); //false