"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        return `Name: ${this.name}`;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        return `ID: ${this.id} - ${super.displayInfo()}`;
    }
}
let std = new Student("Thế Minh", 1007);
console.log("Thông tin:", std.displayInfo());
