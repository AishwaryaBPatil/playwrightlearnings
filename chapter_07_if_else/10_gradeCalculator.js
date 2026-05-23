/*take marks (0–100) and print the grade based on these rules:

- 90 and above → A

- 80–89 → B

- 70–79 → C

- 60–69 → D

- Below 60 → Fail*/

let Grade = 80;

if (Grade >= 90) {
    console.log("Grade A");

} else
    if (Grade >= 80 && Grade >= 89) {
        console.log("Grade B");
    }
    else
        if (Grade >= 70 && Grade <= 79) {
            console.log("Grade C");
        }
        else
            if (Grade >= 60 && Grade <= 69) {
                console.log("Grade D");
            }
            else {
                console.log("Fail");
            }