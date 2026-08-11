class TestClass {

    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() //method
    {
        console.log("this is the method which inside the class");
        console.log(this.name + this.status + this.priority);
    }


}

function f1() { //this is function which is outside the class 

}

let Test = new TestClass("aishwarya", "pass", "p1");
let Test2 = new TestClass("aishwarya", "pass", "p1");
Test2.display();
Test.display();