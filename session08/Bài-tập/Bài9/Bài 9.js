"use strict";
function check3(data) {
    let rusult;
    if (typeof data === "number") {
        rusult = data ** 2;
    }
    else if (Array.isArray(data)) {
        rusult = data.length;
    }
    else if (typeof data === "string") {
        rusult = data.length;
    }
    return rusult;
}
console.log("Number: ", check3(3));
console.log("Số phần tử trong Array: ", check3([1, 2, 3, 4, 5, 6]));
console.log("Độ dài String: ", check3("Minhdeptrai"));
