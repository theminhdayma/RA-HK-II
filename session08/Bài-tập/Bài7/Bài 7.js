"use strict";
function CheckType(type) {
    if (typeof type === "number") {
        console.log("Kiểu number: ", type);
    }
    else if (Array.isArray(type)) {
        console.log("Kiểu Array: ", type);
    }
    else if (typeof type === "object") {
        console.log("Kiểu Object: ", type);
    }
    else {
        console.log("Không thuộc kiểu dữ liệu yêu cầu");
    }
}
CheckType(10);
CheckType([1, 2, 3]);
CheckType({ name: "Minh", age: 18 });
CheckType("Hello");
