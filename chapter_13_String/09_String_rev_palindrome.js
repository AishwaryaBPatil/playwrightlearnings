let myname = "Madam";
let name = myname.toLowerCase();
let rev = "";
for (let i = name.length - 1; i >= 0; i--) {
    rev = rev + name.charAt(i);
}


if (name === rev) {
    console.log(`${name} is palindrome string`);
}
else {
    console.log(`${name} is not a palindrome string`);
}