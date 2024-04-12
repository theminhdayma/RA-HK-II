class Employee {
    public name: string;
    protected company: string
    private phone: string

    constructor(name: string, company: string, phone: string) {
        this.name = name
        this.company = company
        this.phone = phone
    }

    printInfo(): void {
        console.log("Name: ", this.name);
        console.log("Company: ", this.company);
        console.log("Phone: ", this.phone);
    }
}

class Manager extends Employee {
    teamSize: number
    constructor(name:string, company: string, phone: string, teamSize: number){
        super(name, company, phone)
        this.teamSize = teamSize
    }
    
    printInfo(): void {
        console.log("teamSize: ", this.teamSize);       
    }
}

let manager = new Manager ("Minh", "1 thành viên", "0123456789", 1);
manager.printInfo();


