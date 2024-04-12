
class Person {
    name: string

    constructor(name: string){
        this.name = name
    }

    displayInfo (): string {
        return `Name: ${this.name}`
    }
}

class Student extends Person {
    id: number
    constructor(name: string, id: number){
        super(name)
        this.id = id
    }
    displayInfo(): string {
        return `ID: ${this.id} - ${super.displayInfo()}`
    }
}

let std = new Student("Thế Minh", 1007);
console.log("Thông tin:", std.displayInfo());
