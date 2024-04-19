"use strict";
function arrayCombination(arr) {
    let newArray = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            newArray.push(...arrayCombination(item));
        }
        else {
            newArray.push(item);
        }
    });
    return newArray;
}
console.log(arrayCombination([1, [2, [3, 4], 5], 6]));
