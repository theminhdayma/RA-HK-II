"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log("Nghề nghiệp: ", this.type);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        console.log("Lương Parttime: ", this.workingHour * 30000);
    }
}
class FulltimeJob extends Job {
    calculateSalary() {
        console.log("Lương FullTime: 10.000.000đ");
    }
}
// PartTime
let partimeJob = new PartimeJob("Phục vụ", 6);
partimeJob.printType();
partimeJob.calculateSalary();
//FullTime
let fulltimeJob = new FulltimeJob("Kế Toán");
fulltimeJob.printType();
fulltimeJob.calculateSalary();
