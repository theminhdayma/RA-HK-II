"use strict";
/*
    Union Types cho phép một biến hoặc tham
    số có thể chứa giá trị thuộc nhiều kiểu
    dữ liệu khác nhau
*/
let type1;
console.log("Kiểu Union Types: ");
type1 = 10;
console.log("Kiểu number: ", type1);
type1 = "Minh";
console.log("Kiểu string: ", type1);
let c = {
    number: 18,
    string: "hello",
};
console.log("Kiểu Intersection Types: ", c);
