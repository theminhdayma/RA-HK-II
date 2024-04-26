"use strict";
class Person {
    constructor(id, name, gender, age, email, address) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.address = address;
    }
}
class Employee extends Person {
    constructor(id, name, gender, age, email, address, position, salary) {
        super(id, name, gender, age, email, address);
        this.position = position;
        this.salary = salary;
    }
}
class EmployeeManager {
}
