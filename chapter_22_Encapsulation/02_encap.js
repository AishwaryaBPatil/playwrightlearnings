class car {

    #engine;

    constructor(name, engine) {
        this.name = name;
        this.#engine = engine;
    }

    getEng() {
        return this.name + "=>" + this.#engine;
    }

    setEng(nameeng) {
        this.#engine = nameeng;
    }
}
const le = new car("tosca", "v8");
console.log(le.getEng());
le.setEng("tata");
console.log(le.getEng());
