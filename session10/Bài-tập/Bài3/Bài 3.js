"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Name: ", this.name);
        console.log("Company: ", this.company);
        console.log("Phone: ", this.phone);
    }
}
let std = new Employee("Hoa Hồng", "Rekkei Academy", "0987654321");
console.log(std.printInfo());
