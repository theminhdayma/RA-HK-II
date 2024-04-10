"use strict";
function calculateArea(type) {
    if ("square" in type) {
        return type.sideLength * type.sideLength;
    }
    else {
        return Math.PI * (type.radius ** 2);
    }
}
let geometry1 = {
    square: "Square",
    sideLength: 10,
};
let geometry2 = {
    circle: "Circle",
    radius: 10,
};
console.log(calculateArea(geometry1));
console.log(calculateArea(geometry2));
