//the function we stored in variable that is function expression

let sayhello = function () {
    console.log("hi");
}

sayhello(); //calling 


let square = function (number) {
    return number * number;
}
let result = square(4);
console.log(result);

//if i call function before defination then its give me an error 

//add(); // error Cannot access 'add' before initialization because it is not fully hoisted

let add = function (no) {
    console.log(no + no);
}

let minus = function (x, y) {
    return `minus number x,y ${x + y}`
}

let minusresult = minus(4, 3);
console.log(minusresult);