"use strict";
function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        console.log("Tổng: ", a + b);
    }
    else if (typeof a === "string" && typeof b === "string" && typeof +a === "number" && typeof +b === "number") {
        console.log("Tổng: ", +a + +b);
    }
    else {
        console.log("Không hợp lệ !!!");
    }
}
function subtraction(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        console.log("Tổng: ", a - b);
    }
    else if (typeof a === "string" && typeof b === "string" && typeof +a === "number" && typeof +b === "number") {
        console.log("Tổng: ", +a - +b);
    }
    else {
        console.log("Không hợp lệ !!!");
    }
}
function multiplication(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        console.log("Tổng: ", a * b);
    }
    else if (typeof a === "string" && typeof b === "string" && typeof +a === "number" && typeof +b === "number") {
        console.log("Tổng: ", +a * +b);
    }
    else {
        console.log("Không hợp lệ !!!");
    }
}
function division(a, b) {
    if (typeof a === "number" && typeof b === "number" && b !== 0) {
        console.log("Tổng: ", a / b);
    }
    else if (typeof a === "string" && typeof b === "string" && +b !== 0 && typeof +a === "number" && typeof +b === "number") {
        console.log("Tổng: ", +a / +b);
    }
    else {
        console.log("Không hợp lệ !!!");
    }
}
sum(2, 3);
sum("Minh", "deptrai");
subtraction(5, 8);
subtraction("9", "8");
multiplication("Minh", "9");
multiplication(4, 5);
division("Minh", "hay");
division(9, 3);
