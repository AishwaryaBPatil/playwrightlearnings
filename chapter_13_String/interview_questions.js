// ============================================
// Chapter 13 - String Methods | Interview Questions
// Topics: creation, properties, access, search, extract, case, trim, replace,
//         split/join, repeat/pad, concat, conversion, regex, unicode, iteration
// ============================================

// Q1. Write a function that checks if a string is a palindrome (reads the same forwards and backwards).
// Ignore case and non-alphanumeric characters.
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// Q2. Write a function that takes two strings and checks if they are anagrams of each other.
// Ignore case and spaces.
function isAnagram(str1, str2) {
    let sort = s => s.toLowerCase().replace(/\s/g, "").split("").sort().join("");
    return sort(str1) === sort(str2);
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("Astronomer", "Moon starer"));

// Q3. Write a function that counts the frequency of each character in a string and returns an object.
// Expected: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
function charFrequency(str) {
    let freq = {};
    for (let ch of str.toLowerCase()) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    return freq;
}
console.log(charFrequency("Hello World"));

// Q4. Write a function that converts a camelCase string to snake_case and vice versa.
// Expected: "helloWorld" -> "hello_world", "hello_world" -> "helloWorld"
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
console.log(camelToSnake("helloWorldTest"));
console.log(snakeToCamel("hello_world_test"));

// Q5. Write a function that takes a URL string and extracts the protocol, domain, path, and query parameters.
// Expected: { protocol: "https", domain: "example.com", path: "/api/users", query: { page: "1", limit: "10" } }
function parseURL(url) {
    let [protocol, rest] = url.split("://");
    let [domainAndPath, queryString] = rest.split("?");
    let parts = domainAndPath.split("/");
    let domain = parts[0];
    let path = "/" + parts.slice(1).join("/");
    let query = {};
    if (queryString) {
        queryString.split("&").forEach(pair => {
            let [key, value] = pair.split("=");
            query[key] = value;
        });
    }
    return { protocol, domain, path, query };
}
console.log(parseURL("https://example.com/api/users?page=1&limit=10"));
