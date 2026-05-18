//number == String

console.log(4 == "4"); // true - loose equality (type coercion)
console.log("4" === "4"); // true - strict equality (same type and value)
console.log("4" == 4);
console.log("" == 4);
console.log(" " == 0);//true because both are falsy values
console.log("" == " ");
console.log(0 == "");// true because both are falsy values

//true false

console.log(true == 1);
console.log(false == 0);
console.log(true == 0); //false because true is 1 and false is 0
console.log(false == 1); //false because false is 0 and true is 1
console.log(true == false);//false

console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true ( value, dataType)

//console.log(5 !=== "5"); This doesn't excit
// console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose
// console.log(0 === ""); 
