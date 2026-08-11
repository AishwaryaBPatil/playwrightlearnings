let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.testname = "logintest";

console.log(config.browser);//chrome

delete config.browser;

if (config.browser === "chrome") {
    console.log("it will execute the testcase");

}

else {
    console.log("it will not execute the testcase");
}

