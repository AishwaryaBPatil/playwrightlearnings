let order = new Promise(function (resolve, reject) {
    let fooddelivered = true;
    if (fooddelivered) {
        resolve("delevered")
    } else {
        reject("cancelled")
    }
});
console.log(order)