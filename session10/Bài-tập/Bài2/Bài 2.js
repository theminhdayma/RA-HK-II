"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let student = [];
let std01 = new Student(1, 19, "abcd123@gmail.com");
let std02 = new Student(2, 20, "xyz456@gmail.com");
student.push(std01);
student.push(std02);
student.forEach(element => console.log(element));
