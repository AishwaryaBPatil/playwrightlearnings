class TestCase {
    execute() {
        console.log("Running generic test");
    }
}
class UnitTest extends TestCase {
    execute() {
        console.log("Running unit test — checking one function");
    }
}
class APITest extends TestCase {
    execute() {
        console.log("Running API test — sending HTTP request");
    }
}
class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test — opening browser");
    }
}
let tests = [new UnitTest(), new E2ETest(), new APITest()];

// tests.forEach(function (test) {
//     test.execute();
// });


function runtest(test) {
    return test.execute();
}
for (let i = 0; i < tests.length; i++) {
    runtest.tests[i];
}

let te = runtest();
System.out.println(te);