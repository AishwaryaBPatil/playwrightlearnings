class BaseClass {
    setup() {
        console.log("browser opened");
    }
}

class childclass extends BaseClass {

    tearDown() {
        console.log("browser closed");
    }
    setup() {
        console.log("browser closed");
    }
}

const result = new childclass();
result.setup();
result.tearDown();