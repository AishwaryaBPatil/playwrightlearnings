let a = 5;
console.log(a++); // 5 (post-increment: returns the value before incrementing)
console.log(++a);

console.log(a++ + ++a - --a + a-- + ++a);
console.log(a++ + ++a - --a + a-- + a++);
console.log(a);

//A= a++ , B=++a , c=--a , D=++a
// 5 + 7 - 6 + 6 + 6
// 5 + 7 - 6 + 6 + 6 = 18
//a=6

let x = 10;
console.log(x++ + ++x);






