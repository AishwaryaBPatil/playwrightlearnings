function getStatusUser() {
    console.log(status_code); //undefined 
    var status_code = "active";
    console.log(status_code);


}

getStatusUser();






// Note: var is function-scoped, so status is hoisted to
// the top of getStatusUser(), NOT the global scope.



