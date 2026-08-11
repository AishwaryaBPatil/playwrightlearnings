class Animal {


    constructor(name) {
        this.name = name;
    }

    eating() {
        console.log("i am eating");
    }

    sleeping() {
        console.log("i am sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;

    }

    bark() {
        console.log("dog is barking");
    }
}

const res = new Dog("tom", "bbbb");
res.sleeping();

res.bark();