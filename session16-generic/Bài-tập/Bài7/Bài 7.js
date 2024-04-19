"use strict";
function calculate(num1, num2) {
    let num3;
    if (typeof num1 === "number" && typeof num2 === "number") {
        num3 = num1 + num2;
        console.log("Tổng: ", num3);
        num3 = num1 - num2;
        console.log("Trừ: ", num3);
        num3 = num1 * num2;
        console.log("Nhân: ", num3);
        if (num2 !== 0) {
            num3 = num1 / num2;
        }
        console.log("Chia: ", num3);
    }
    else {
        console.log("Không phải kiểu number");
    }
}
let num1 = 10;
let num2 = 5;
calculate(num1, num2);
num1 = "10";
num2 = true;
calculate(num1, num2);
