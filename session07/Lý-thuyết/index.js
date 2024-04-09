"use strict";
// Array
// Cách 1 
// let students: string[] = ["hoa"]
// ==> phần tử chỉ có string và tương tự vậy
// Cách 2
let numbers = [2, 3, 4, 5];
// Object
let cats = {
    name: "tony",
    height: 50,
    color: "while"
};
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
})(Role || (Role = {}));
let person = {
    name: "Minh",
    age: 20,
    role: 0,
};
function sayHello() {
    console.log("Hello !!!");
}
console.log(sayHello()); // underfiend
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));
/*
    unknowns: chưa biết - không biết
    cũng giống như any nhưng nó chặt chẽ hơn
    Khi sử dụng phải kiểm tra nó
*/
function typeAny(userName) {
    if (typeof userName == "string") {
        console.log("userName: ", userName.toUpperCase());
    }
    else {
        console.log("Không phải là string");
    }
}
typeAny("Minh");
typeAny(8);
/*
    never: Thường dùng trong vòng lặp vô tận, không có điểm kết thúc
*/
function typeNever() {
    while (true) {
        console.log("Đây là vòng lặp tuần hoàn !!");
    }
}
// typeNever();
