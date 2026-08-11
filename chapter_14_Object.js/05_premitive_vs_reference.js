//premitive vs reference type

let a = 20;
let b = 23;

b = a;
b = 99; //means value of a will be given to b
console.log(b); //only b value changes i.e 99 
console.log(a);// a value as it is because they are pointing two different points


let obj = {
    a: 20
}
let obj1 = obj;
obj1.a = 99;

console.log(obj.a);
console.log(obj1);
