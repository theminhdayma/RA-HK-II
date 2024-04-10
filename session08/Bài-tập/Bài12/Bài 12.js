"use strict";
function check4(number) {
    if (Number.isInteger(number)) {
        console.log(`${number} là số nguyên.`);
    }
    else {
        console.log(`${number} là số thực.`);
    }
}
console.log(check4(5));
console.log(check4(6.7));
console.log(check4(NaN));
