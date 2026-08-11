//**** 
//***
// **
// *

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = n - 1; j >= i; j--) {
        row = row + "*";
    }
    console.log(row.trim());
}
