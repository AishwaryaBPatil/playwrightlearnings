class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + "-> launching an browser");
    }

    startbrowser() {
        console.log(name + "browser started");
    }

    closebrowser() {
        console.log(name + "browser closed");
    }
}

let br = new Browser("chrome");
let br1 = new Browser("firefox");
console.log(br.isOpen);
console.log(br.startbrowser);
console.log(br1.startbrowser);