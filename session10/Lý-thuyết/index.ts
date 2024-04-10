/* 
    Các cách tạo đối tượng trong js
    1. let, const, var tên đối tượng = {};
    2. Dùng new Object{}
    3. 
        - Tạo constructer
        function Student(name){
            this.name = name
        }
        ==> Khuân để tạo đối tượng

        let std1 = new Student("Minh");
        ==> Đây là đi tạo đối tượng

    4.
        tạo class
        class Person {
            constructer (name, age, address){
                this.name = name,
                this.age = age,
                this.address = address,
            }
        }
        let std1 = new Person("Minh", 18, "Hà Nội")
        ==> Đây là tạo đối tượng thông qua từ khóa new

    ĐỐI TƯỢNG SẼ GỒM 2 PHẦN
      + thuộc tính (property)
      + phương pháp (hành vi method)

    OOP: gồm 4 tính chất
      1. Tính đóng gói (encapsulation)
         + Che giấu thông tin của đối tượng 
         ==> Nhằm giúp cho các truy cập đến đối tượng được bảo mật hơn
      2. Tính trừu tượng (abstraction)
      3. Tính kế thừa (inneritance)
      4. Tính đa hình (polymorphism)


*/

class Person {
   public name1: string; // Mặc định phạm vi truy cập public
   private age1: number; // ==> Đây là kiểu dữ liệu
    // Trong trường hợp phạm vi là private
    // ĐỂ truy cập vào 
    firstName: string;
    lastName: string;
   private address: string;
    constructor (name:string, age:number, firstName: string, lastName: string, address: string){ // ==> Đây là giá trị của kiểu dữ liệu
        this.name1 = name,
        this.age1 = age// ==> kết quả
        this.firstName = firstName,
        this.lastName = lastName,
        this.address = address;
    }

    //Nơi khai báo những mothob
    // Ví dụ khai báo 1 phương trình show thông tin của user
    showInfo(): void {
        console.log("Xin chào, ", this.firstName + " " + this.lastName);       
    }
    showName(): void {
        console.log("Tên: ", this.name1);      
    }
    getAge(): number{
        return this.age1;    
    }
    setAge(age: number): void {
        this. age1 = age;
    }
    get address1(){
        return this.address
    }
    set address2(address: string){
        this.address = address;
    }
}

let std1 = new Person ("Minh", 18, "Thế", "Minh", "Hà Nội");
// Được gọi là 1 instance của class Person

console.log("std1: ", std1);
std1.showInfo();

// Tính đồng đội : encapsulation
// access modifier - phạm vi truy cập 
/* 
    1. public
    2. private
    3. proceted
      - Khi class con kế thừa class cha thì class con sẽ có
      các thuộc tính và phương thức của class cha
      - Khi phạm vi truy cập proceted thì class con không 
*/
std1.name1 = "Thế Minh";
std1.showName();
console.log(std1.getAge());

// Đi set tuổi 
std1.setAge(20);
console.log(std1.getAge());

console.log(std1.address1);
std1.address2 = "HCM";
console.log(std1.address1);





