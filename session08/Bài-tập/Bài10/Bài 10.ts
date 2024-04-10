interface Person {
    name: string,
    age: number,
}

interface Employee extends Person {
    employeeId: number;
}

let person: Employee = {
    name: "Minh",
    age: 18,
    employeeId: 2005,
}

console.log("Tôi: ", person);
