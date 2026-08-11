
// Q1. Write a function that prints numbers 1-100, but for multiples of 3 print "Fizz",
// for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz"

let result = [];

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0) {
        result.push("Fizz");
    } else if (i % 5 === 0) {
        result.push("BUZZ");
    }
    else {
        result.push(i);
    }

}

console.log(result);


function setdef() {
    let a = 10;
    console.log(a);
    if (true) {


        let a = 20;   // if i dont create new a inside block then it will give me last output as 20 

        console.log(a);// so create new let for same in because it block scoped so we can redeclare a and output for last a is 10 
    }
    console.log(a);

}


setdef();