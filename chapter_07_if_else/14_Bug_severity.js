/*Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score
Sample Input/Output:
Input: 9
Output: Severity: Critical — Block release
Input: 5
Output: Severity: Medium*/

let impactScore = 5;
if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical-block release");
}
else if (impactscore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
}
