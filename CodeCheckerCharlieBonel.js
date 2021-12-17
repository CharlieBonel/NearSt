/* For this, I made the assumption that there is only one code to satisfy the rules. This means that, as soon as
a code that satisfies the rules is found, we can stop.

Loop through all of the possible combinations of digits we have */
let code = []
for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
        for (let c = 0; c < 10; c++) {
            for (let d = 0; d < 10; d++) {
                for (let e = 0; e < 10; e++) {
/* if the first 4 conditions are satisfied, we have a potential match */
                    if (a * b == 24 && b == 3 * d && (a + c) == (d + e) && a + b + c + d + e == 26) {
                        let codePoss = [a, b, c, d, e];
/* Check all of the numbers within codePoss against the other numbers. If any of the numbers are equal, then it satisfies all of the rules and is the code; otherwise, continue through the loop */
                        for (let n = 0; n < codePoss.length; n++) {
                            for (let m = n + 1; m < codePoss.length; m++) {
                                if (codePoss[n] == codePoss[m]) {
                                    code = codePoss;
                                    break;
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(code)