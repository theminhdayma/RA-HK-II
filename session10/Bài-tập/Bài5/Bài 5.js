"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log("ID:", this.id);
        console.log("Tên phòng ban:", this.name);
    }
}
let department = new Department(111, "Quản lý", ["Tùng", "Dũng", "Sơn", "Khoa"]);
department.describe();
