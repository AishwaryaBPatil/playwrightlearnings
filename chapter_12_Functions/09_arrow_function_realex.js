//check status code if greater than 200 then ok else error

const status = (statuscode) => {
    if (statuscode >= 200 && statuscode <= 300) {
        return `ok ${statuscode}`
    }
    else {
        return `error  ${statuscode}`
    }
}

let result = status(200);
console.log(result);