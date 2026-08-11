let apicall = new Promise(function (resolve, reject) {
    reject({
        status: 500, body: "userbody"

    });
});

apicall.
    then(function (res) {
        console.log(res.status);
    })
    .catch(function (err) {
        console.log("caught", err);
    })

//catch will run if its reject
//then will skipped