function greet(name, callback) {
    console.log(name, "hello");
    callback();
}

function saybye() {
    console.log("bye");
}

greet("aish", saybye);