
/* 
    1. Abstract method
        - Muốn trả về kiểu kết quả giống nhau nhưng cách thực hiện khác nhau
        - Bắt buộc các lớp con phải thực hiện 
*/

abstract class A {
    number: number
    constructor(number: number) {
        this.number = number
    }

    abstract getNumber(): number;
}

class B extends A {
    getNumber(): number {
        return this.number
    }
}

class C extends A {
    age: number
    constructor(number: number, age: number){
        super(number)
        this.age = age
    }

    getNumber(): number {
        return this.number * this.age
    }
}

/* 
    2. method thông thường
        - Thực hiện chung (giống nhau)
        - Các lớp con có thể có hoặc không
*/

class X {
    getSay(): void {
        console.log("Hello");       
    }
}

class Y extends X {
    getSay(): void {
        super.getSay();
    }
}

class Z extends X {
    
}

