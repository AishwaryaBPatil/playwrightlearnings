console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");  //  🤯 (transitivity broken!)


console.log(0 == false);
console.log(null == 0); //false because null is only loosely equal to undefined and not to any other value
console.log(null == undefined);
console.log(null === undefined);