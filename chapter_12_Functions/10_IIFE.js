//function call itself

(function () {
    console.log("hi");
}
)(); //it will call itself


function say() {
    console.log("hi");
} //this will not print anything because its not called 


let work = (function () {
    return 5;

}
)();
console.log(work);//if you wanted to use return 

//you can also use console,log before defining funcion

console.log((function () {
    return 5;
})());

(() => console.log("hello")
)();