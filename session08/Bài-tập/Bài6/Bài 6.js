"use strict";
function check1(item) {
    if (typeof item === "string") {
        console.log("Chuỗi: ", item);
    }
    else if (Array.isArray(item)) {
        console.log("Mảng chuỗi:");
        item.forEach(i => console.log(i));
    }
}
check1("hello");
check1(["m", "i", "n", "h", "deptrai"]);
