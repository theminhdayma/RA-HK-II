class Vehicle1 {
    public name: string;
    protected year: number;
    private company: string;
    private readonly id: number;

    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    printInfo(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
    }
}

let vehicle01 = new Vehicle1("Hoa Hồng", 2022, "Rekkei Academy", 101);
console.log("Trước khi thay đổi: ");
vehicle01.printInfo();

console.log("Sau khi thay đổi: ");
// vehicle01.id = 123;
// ==> Do đặt loại id có thuộc tính readonly nên không thể
// thay đổi được giá trị của id
vehicle01.name = "Hoa Huệ"
vehicle01.printInfo();
