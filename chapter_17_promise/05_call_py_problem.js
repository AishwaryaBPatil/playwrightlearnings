function openbrowser() {
    return new Promise(function (resolve) {
        resolve("broser open");
    })
}

// function openbrowser(callback) {
//     setTimeout(function () {
//         console.log("step 1");
//         callback();
//     }, 500)
// }
// openbrowser(function () {
//     console.log("done");
// });

function gotoLogin() {
    return new Promise(function (resolve) {
        resolve("step2");
    })
}

function entercredencials() {
    return new Promise(function (reject) {
        reject("step3");
    })
}

openbrowser()
    .then(function (msg) {
        console.log("step2");
        return gotoLogin();
    }).then(function (msg) {
        console.log("step3");
        return entercredencials();
    })
    .catch(function (err) {
        console.log(err);
    })