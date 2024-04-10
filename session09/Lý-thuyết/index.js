"use strict";
console.log(5 && 6); // ==> 6
//Tính từ trái qua phải gặp falsy thì lấy, nếu không có lấy cuối cùng
// falsy :0, null, false, "", underfined, NaN
console.log(1 || null && 6); // ==> 1
let c = {
    name: "Minh",
    address: "Hà Nội",
    id: 100,
};
console.log(c);
