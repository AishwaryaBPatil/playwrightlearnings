const user = {
    name: "aish",
    age: 43
}

const user1 = {
    name: "aish",
    add(a, b) {
        return a + b;
    }
}
let addition = user1.add(3, 4);
console.log(addition);
console.log(user1);