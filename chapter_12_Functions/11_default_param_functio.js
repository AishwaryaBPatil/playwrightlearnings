function retry(testname, maxRetry = 3, delay = 3000) {
    console.log(`retrying ${testname} up to ${maxRetry} with ${delay}`);
}

retry("login test");
retry("regression test", 50, 200);