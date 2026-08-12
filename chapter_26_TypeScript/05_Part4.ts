function sayHello(msg: string): void {
    console.log(`hi ${msg}`);
};
sayHello("Hello");

//fnction annotation
function greet(mssg: string): string {
    return `hi ${mssg}`;
}
let result: string = greet("good morning");
console.log(result);

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}