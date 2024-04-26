interface IPerson {
    id: number;
    name: string;
    gender: number;
    age: number;
    email: string
    address: string
}

class Person implements IPerson {
    id: number;
    name: string;
    gender: number;
    age: number;
    email: string;
    address: string;

    constructor(id: number, name: string, gender: number, age: number, email: string, address: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.address = address;
    }
}

class Employee extends Person {
    position: string;
    salary: number;
    constructor(id: number, name: string, gender: number, age: number, email: string, address: string, position: string, salary: number){
        super(id, name, gender, age, email, address)
        this.position = position;
        this.salary = salary;
    }
}

class EmployeeManager {
    
}