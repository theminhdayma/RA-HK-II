"use strict";
/*
    1. Abstract method
        - Muốn trả về kiểu kết quả giống nhau nhưng cách thực hiện khác nhau
        - Bắt buộc các lớp con phải thực hiện
*/
class A {
    constructor(number) {
        this.number = number;
    }
}
class B extends A {
    getNumber() {
        return this.number;
    }
}
class C extends A {
    constructor(number, age) {
        super(number);
        this.age = age;
    }
    getNumber() {
        return this.number * this.age;
    }
}
/*
    2. method thông thường
        - Thực hiện chung (giống nhau)
        - Các lớp con có thể có hoặc không
*/
class X {
    getSay() {
        console.log("Hello");
    }
}
class Y extends X {
    getSay() {
        super.getSay();
    }
}
class Z extends X {
}
