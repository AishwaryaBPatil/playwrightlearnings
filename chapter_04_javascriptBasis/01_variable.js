var browser = "chrome"; //assigned
var browser = "firefox";//redeclared
browser = "edge"; //reassigned
console.log(browser); //edge 

var testcase = ["chrome", "firefox", "edge"];

for (var i = 0; i < testcase.length; i++) {
    var browsers = testcase[i];
}

console.log(browsers); //edge  //out of the for loop and still can access the variable i because of var's function scope
//why edge because  last value of browser is edge means its recent value will print .

function test() {
    var a = 100;
    console.log("test function");
    console.log(a);
}
console.log(a); //now var is function scope so we cannot access variable a outside the function test() and it will give error that a is not defined.
var a = 2;
console.log(a); //2
function printhello() {
    console.log("hello");
    var a = 10;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("far->", a); //30 because var is function scope so it will override the value of a in the function printhello() and it will print 30 instead of 10
}

printhello();

