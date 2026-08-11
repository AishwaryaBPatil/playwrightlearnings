class parent {
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;

    }


    getChild() {
        return this.#child1 + this.#child2;
    }

    setChild1(name_child) {
        this.#child1 = name_child;
    }
}

const pa = new parent("father", "abcd", "bcfd");
pa.setChild1("aishwarya");
console.log(pa.getChild());
