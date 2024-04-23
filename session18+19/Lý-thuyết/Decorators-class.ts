/* 
    Dùng để bổ sung, thay đổi thuộc tính, phương thức cho đối tượng
    cú pháp: @
*/

//function Decorators để thêm thuộc tính

function decoratorsPropety<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      address = "Hà Nội";
      age = 18;
    };
}

@decoratorsPropety
class Student {
    userName: string;
    constructor(userName: string){
        this.userName = userName
    }
}

let std1 = new Student ("Minh")
// Thêm thuộc tính age cho đối tượng std1
// dùng decorator
console.log("Student: ", std1);

// closure

function sum (){
    return function(a: number, b: number): number {
        return a+b;
    }
}

console.log(sum()(1,2));
