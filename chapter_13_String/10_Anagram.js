let s1 = "Saw";
let s2 = "Was";

let a1 = s1.toLowerCase().split('').sort().join();
//console.log(a1);
let a2 = s2.toLowerCase().split('').sort().join();
//console.log(a2);

if (a1 === a2) {
    console.log(`${s1} and ${s2} is a Anagram`);
} else {
    console.log(`${s1} and ${s2} not  a Anagram`);
}