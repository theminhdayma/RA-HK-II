
abstract class Job {
    type: string
    constructor (type: string){
        this.type = type
    }

    printType(): void{
        console.log("Nghề nghiệp: ", this.type);
    }

    abstract calculateSalary (): void;
}

class PartimeJob extends Job {
    workingHour: number
    constructor(type: string, workingHour: number){
        super(type)
        this.workingHour = workingHour
    }

    calculateSalary(): void {
        console.log("Lương Parttime: ", this.workingHour * 30000);       
    }
}

class FulltimeJob  extends Job {
    calculateSalary(): void {
        console.log("Lương FullTime: 10.000.000đ");       
    }
}

// PartTime
let partimeJob = new PartimeJob("Phục vụ", 6)
partimeJob.printType();
partimeJob.calculateSalary();

//FullTime
let fulltimeJob = new FulltimeJob("Kế Toán");
fulltimeJob.printType();
fulltimeJob.calculateSalary();