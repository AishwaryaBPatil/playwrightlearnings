class BaseClass {
    setup() {
        console.log("hello");
    }
}

class child extends BaseClass {
    setup() {
        console.log("hii");
    }
}

let ch = new BaseClass();
ch.setup();