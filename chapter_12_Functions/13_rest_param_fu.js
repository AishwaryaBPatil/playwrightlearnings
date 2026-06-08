function logresults(status, ...result) {
    console.log(`${status} and ${result}`);
}

let result = logresults("pass", 1, 2, 3, 4);
console.log(result);//undefined
logresults("pass", 2, 3, 4);