class Person {
    constructor(name, age, number) {
        this.name = name;
        this.age = age;
        this.number = number;
    }

    sleep() {
        console.log("i am sleeping");
    }

    eat() {
        console.log("i am eating");
    }
}

const ref = new Person("aish", 23, 78);
// ref is reference and new person is object also it will call automatically constructor once you create object with new keyword
console.log(ref);
ref.sleep()
ref.eat();