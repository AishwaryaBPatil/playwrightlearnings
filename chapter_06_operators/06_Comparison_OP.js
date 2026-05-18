// Comparsion Op - true / false - boolean
//> greater than
//>= greater than= greater than or equal to
//< less than
//<= less than or equal to  
//== equality operator (loose equality) - it checks for value equality but not type equality. it will perform type coercion if the types of the operands are different. for example, if we compare 5 == "5", it will return true because it will convert the string "5" to a number before comparing. but if we compare 5 === "5", it will return false because it will not perform type coercion and it will check for both value and type equality.
//=== strict equality operator - it checks for both value and type equality. it will not perform type coercion. for example, if we compare 5 === "5", it will return false because it will not convert the string "5" to a number before comparing. but if we compare 5 == "5", it will return true because it will convert the string "5" to a number before comparing.

console.log(5 > 3);
console.log(3 < 5);
console.log(10 >= 11);
console.log(3 <= 4);
console.log(5 <= 5); // true because 5 <5 is false but 5==5 true it checks or condition.

