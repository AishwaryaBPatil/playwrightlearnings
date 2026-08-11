let c = { status: "pass" };
let d = { status: "pass" };

console.log(c);
console.log(d);


if (c === d) {
    console.log("true");
}
else {
    console.log("false"); //this will be he ans bcause reference is difference they are pointing two different references
}
