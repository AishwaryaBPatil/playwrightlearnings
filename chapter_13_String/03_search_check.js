
let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("a"));
url.includes("api");

console.log(url.startsWith("https"));
console.log(url.endsWith("true"));

//indexof/lastindexof

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("t"));

console.log(url.search(/true/));


// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 