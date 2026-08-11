let apicall = new Promise(function (resolve, reject) {
    resolve({
        status: 200, body: "user data"
    });
})

apicall.then(function (data) {
    console.log(data.status);
});
//then only works  when resolved is passed
