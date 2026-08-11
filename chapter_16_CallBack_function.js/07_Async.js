let result = [1, 2, 3, 4, 5];
console.log(result);

setTimeout(function () {
    console.log("this is test 2");
}, 2000);

let result2 = [1, 2, 3, 4, 5];
console.log(result2);

/*
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
this is test 2  this test run last because it will not wait for to run test it will run one bye one once timeout finish it will run last 
*/