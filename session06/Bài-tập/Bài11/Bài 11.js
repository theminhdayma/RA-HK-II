"use strict";
function calculate(operation) {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const resultDiv = document.getElementById("result");
    let result;
    const num1 = input1.value;
    const num2 = input2.value;
    switch (operation) {
        case 'sum':
            result = sum(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        case 'exponential':
            result = exponential(num1, num2);
            break;
        case 'square-root':
            result = squareRoot(num1);
            break;
        default:
            result = "Lỗi !!!";
    }
    resultDiv.innerText = "Kết quả: " + result;
}
function sum(a, b) {
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA + numB;
    }
    else {
        return "Lỗi !!!";
    }
}
function subtract(a, b) {
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
    }
    else {
        return "Lỗi !!!";
    }
}
function multiply(a, b) {
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA * numB;
    }
    else {
        return "Lỗi !!!";
    }
}
function divide(a, b) {
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));
    if (!isNaN(numA) && !isNaN(numB)) {
        if (numB !== 0) {
            return numA / numB;
        }
        else {
            return "Lỗi !!!";
        }
    }
    else {
        return "Lỗi !!!";
    }
}
function exponential(a, b) {
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));
    if (!isNaN(numA) && !isNaN(numB)) {
        return Math.pow(numA, numB);
    }
    else {
        return "Lỗi !!!";
    }
}
function squareRoot(a) {
    const numA = parseFloat(String(a));
    if (!isNaN(numA)) {
        if (numA >= 0) {
            return Math.sqrt(numA);
        }
        else {
            return "Lỗi !!!";
        }
    }
    else {
        return "Lỗi !!!";
    }
}
