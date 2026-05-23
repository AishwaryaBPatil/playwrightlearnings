//check leap year or not
//rules divisible by 4 
//not divisible by 100
//divisible by 400

let leap_year = 2024;
if (leap_year % 4 === 0 && leap_year % 400 === 0 && leap_year % 100 !== 0) {
    console.log(leap_year + " is a leap year");
}
else {
    console.log(leap_year + " is not a leap year");
}
