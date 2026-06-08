function runtest(name, status, duration) {
    return `${name} + ${status} + ${duration}`;
}

let r = runtest("login test", "pass", 20);
console.log(r);