// let api = new Promise(function (resolve, reject) {
//     let statusis = true;
//     if (statusis) {
//         resolve("api passed");
//     }
//     else {
//         reject("asertion failed");
//     }
// })

// api.then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log("caught", err);
// }).finally
// {
//     console.log('always run');
// }


let api = new Promise(function (resolve, reject) {
    let statusis = false;
    if (statusis) {
        resolve("api passed");
    }
    else {
        reject("asertion failed");
    }
})

api.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log("caught", err);
}).finally
{
    console.log('always run');
}