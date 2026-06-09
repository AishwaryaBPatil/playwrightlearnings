// ============================================
// JavaScript String Methods - Complete Cheat Sheet
// ============================================

let s = "JavaScript";

// ==========================================
// 1. STRING CREATION
// ==========================================
let s1 = "Hello";
let s2 = 'World';
let s3 = `Hello ${s2}`;
let s4 = String(123);
let s5 = new String("Hello");

// ==========================================
// 2. PROPERTY
// ==========================================
s.length;

// ==========================================
// 3. ACCESSING CHARACTERS
// ==========================================
s[0];
s.charAt(0);
s.at(0);
s.at(-1);
s.charCodeAt(0);
s.codePointAt(0);

// ==========================================
// 4. SEARCHING
// ==========================================
s.indexOf("a");
s.lastIndexOf("a");
s.includes("Script");
s.startsWith("Java");
s.endsWith("Script");
s.search(/Script/);

// ==========================================
// 5. EXTRACTING
// ==========================================
s.slice(0, 4);
s.slice(-6);
s.substring(0, 4);
s.substring(4, 10);
s.substr(0, 4);

// ==========================================
// 6. CASE CONVERSION
// ==========================================
s.toUpperCase();
s.toLowerCase();
s.toLocaleUpperCase("en-US");
s.toLocaleLowerCase("en-US");

// ==========================================
// 7. TRIMMING
// ==========================================
"  hello  ".trim();
"  hello  ".trimStart();
"  hello  ".trimEnd();

// ==========================================
// 8. REPLACING
// ==========================================
s.replace("Java", "Type");
s.replaceAll("a", "A");
s.replace(/a/g, "A");
s.replace(/a/gi, "A");

// ==========================================
// 9. SPLITTING & JOINING
// ==========================================
"a,b,c".split(",");
"hello".split("");
["a", "b", "c"].join("-");
["2024", "01", "15"].join("/");

// ==========================================
// 10. REPEATING & PADDING
// ==========================================
"ha".repeat(3);
"5".padStart(3, "0");
"5".padEnd(3, "0");
"hi".padStart(10, "-");

// ==========================================
// 11. CONCATENATION
// ==========================================
"Hello" + " " + "World";
"Hello".concat(" ", "World");
`Hello ${"World"}`;

// ==========================================
// 12. STRING CONVERSION
// ==========================================
String(100);
String(true);
String(null);
String(undefined);
String([1, 2, 3]);
(100).toString();
(255).toString(16);
(10).toString(2);
(8).toString(8);

// ==========================================
// 13. STRING TO NUMBER
// ==========================================
Number("42");
parseInt("42px");
parseFloat("3.14rem");
+"42";

// ==========================================
// 14. COMPARISON
// ==========================================
"a".localeCompare("b");
"b".localeCompare("a");
"a".localeCompare("a");

// ==========================================
// 15. REGEX METHODS
// ==========================================
"abc123def".match(/\d+/);
"abc123def".matchAll(/\d/g);
"hello world".replace(/\s/, "-");
"test123".search(/\d/);
"abc".replace(/[a-z]/g, "*");

// ==========================================
// 16. UNICODE
// ==========================================
String.fromCharCode(65);
String.fromCodePoint(9731);
"\u0041";
"\u{1F600}";

// ==========================================
// 17. ITERATION & SPREAD
// ==========================================
for (let ch of "hello") {
    console.log(ch);
}
[..."hello"];
[..."hello"].reverse().join("");

// ==========================================
// 18. USEFUL PATTERNS
// ==========================================

let csv = "name,age,city";
csv.split(",").join(" | ");

let url = "https://example.com/path/file.js";
url.split("/").pop();

let email = "user@example.com";
email.split("@")[0];

let template = "Hello {name}, welcome to {place}!";
template.replace("{name}", "Aish").replace("{place}", "VWO");

let dirty = "  Hello \n World \t ";
dirty.trim();

let str = "JavaScript";
str.split("").sort().join("");

let num = "1234567890";
num.slice(-3);

let date = "2024-01-15";
let [year, month, day] = date.split("-");

let filename = "report.pdf";
filename.endsWith(".pdf");
filename.replace(".pdf", ".docx");

// ==========================================
// 19. IMMUTABILITY NOTE
// ==========================================
let x = "hello";
let y = x.toUpperCase();
console.log(x);
console.log(y);

// ==========================================
// 20. QUICK REFERENCE TABLE
// ==========================================
// Method              | Returns  | Description
// --------------------|----------|----------------------------
// .length             | number   | String length
// .charAt(n)          | string   | Char at index
// .charCodeAt(n)      | number   | Unicode at index
// .indexOf(sub)       | number   | First index of substring
// .lastIndexOf(sub)   | number   | Last index of substring
// .includes(sub)      | boolean  | Contains substring?
// .startsWith(sub)    | boolean  | Starts with?
// .endsWith(sub)      | boolean  | Ends with?
// .slice(start, end)  | string   | Extract (supports negative)
// .substring(a, b)    | string   | Extract (no negative)
// .toUpperCase()      | string   | All uppercase
// .toLowerCase()      | string   | All lowercase
// .trim()             | string   | Remove both-side spaces
// .trimStart()        | string   | Remove leading spaces
// .trimEnd()          | string   | Remove trailing spaces
// .replace(a, b)      | string   | Replace first match
// .replaceAll(a, b)   | string   | Replace all matches
// .split(sep)         | array    | Split into array
// .repeat(n)          | string   | Repeat n times
// .padStart(n, ch)    | string   | Pad from start
// .padEnd(n, ch)      | string   | Pad from end
// .concat(s1, s2)     | string   | Join strings
// .match(regex)       | array    | Regex match
// .search(regex)      | number   | Regex search index
// .localeCompare(s)   | number   | Compare strings
// .at(n)              | string   | Char at index (neg ok)
// .codePointAt(n)     | number   | Code point at index
