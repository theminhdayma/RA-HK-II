"use strict";
let num1 = 1;
let num2 = 2;
let num3;
num3 = num1 + num2;
console.log("Cộng: ", num3);
num3 = num1 - num2;
console.log("Trừ: ", num3);
num3 = num1 * num2;
console.log("Nhân: ", num3);
if (num2 !== 0) {
    num3 = num1 / num2;
}
else {
    console.log("Không thể chia cho 0");
}
console.log("Chia: ", num3);
num1 = "1";
num2 = true;
num3 = num1 + num2;
console.log("Cộng lại ", num3);
num3 = num1 - num2;
console.log("Trừ lại: ", num3);
num3 = num1 * num2;
console.log("Nhân lại: ", num3);
if (num2 !== 0) {
    num3 = num1 / num2;
}
else {
    console.log("Không thể chia cho 0");
}
console.log("Chia lại: ", num3);
