// You are working API Validation
// response Code - 200, 404, 401, 403.....404

let statusCode = 404;
switch (statusCode) {
    case 200:
        console.log("Success" + statusCode);
        break;
    case 404:
        console.log("Not Found" + statusCode);
        break;
    case 401:
        console.log("Unauthorized" + statusCode);
        break;
    case 403:
        console.log("Forbidden" + statusCode);
        break;
    case 404:
        console.log("Not Found" + statusCode);
        break;
    default:
        console.log("Invalid Status Code" + statusCode);

}