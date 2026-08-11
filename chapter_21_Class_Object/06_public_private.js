class student {

    #apikey = 234;
    user;

    constructor(name, api) {
        this.name = name;
        this.apikey = api;
    }

    //custom made function by us
    megetAuthHeader() {
        return "barear" + this.#apikey;//need to give this.# other wide it will give you error undefined
    }

}

let s = new student("aish", "key");
console.log(s.megetAuthHeader());