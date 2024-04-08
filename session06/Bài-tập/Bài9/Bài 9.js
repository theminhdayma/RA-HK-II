"use strict";
let startString = "hello world !!!";
let resultString = "";
for (let char of startString) {
    if (!resultString.includes(char)) {
        resultString += char;
    }
}
console.log("Kết quả:", resultString);
