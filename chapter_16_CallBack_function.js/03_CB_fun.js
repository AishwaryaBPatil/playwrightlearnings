function cafe(item, callwhentableready) {
    console.log("Finding.....1");
    console.log("Finding....2");
    console.log("Finding...3" + item);
    callwhentableready();
}

function callwhentableready() {
    console.log("calling 678976546");
}
cafe("pizza", callwhentableready);

cafe("burger", function () {
    console.log("finding...4");
});

cafe("momos", () => {
    console.log("calling 9090909090");
})