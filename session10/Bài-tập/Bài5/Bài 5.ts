

class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    describe(): void {
        console.log("ID:", this.id);
        console.log("Tên phòng ban:", this.name);
    }
}

let department = new Department(111, "Quản lý", ["Tùng", "Dũng", "Sơn", "Khoa"]);
department.describe();

