//let is block scoped

let reference = 10;
console.log(reference);

reference = reference + 20;
//let reference = 30; // let we cannot redeclare the variable reference because it is already declared in the same scope and it will give error that reference has already been declared. but we can reassign the value of reference because it is not a constant variable. if we want to declare a constant variable then we can use const keyword instead of let keyword.
console.log(reference);


function refer() {
    reference = 30;
    let executiontime = "200";
    console.log("function", reference);
    if (true) {
        reference = 40;
        console.log("if-block", reference);
    }
    console.log("block scoped", reference);//30 because let is block scope so we can access the variable reference inside the function refer() and it will print 30 instead of 40 because the value of reference is reassigned to 30 in the function refer() and it will not affect the value of reference outside the function refer() because it is block scope.
}
console.log(reference);//10 because let is block scope so we can access the variable reference outside the function refer() and it will print 10 instead of 30 because the value of reference is reassigned to 30 in the function refer() and it will not affect the value of reference outside the function refer() because it is block scope.

console.log(executiontime); //  error executiontime is not defined because let is block scope so we cannot access the variable executiontime outside the function refer() and it will give error that executiontime is not defined because it is block scope and it is only accessible inside the function refer().
refer();