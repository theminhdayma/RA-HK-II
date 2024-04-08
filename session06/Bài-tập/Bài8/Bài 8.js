"use strict";
let firstName = "Thế Minh";
let lastName = "deptrai";
let fullName;
if (firstName.length > 0) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
if (lastName.length > 0) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
fullName = firstName + " " + lastName;
console.log("Họ và tên đầy đủ:", fullName);
