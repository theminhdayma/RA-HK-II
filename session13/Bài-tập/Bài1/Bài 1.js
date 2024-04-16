"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log("Tên hình: ", this.name);
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("Chiều rộng: ", this.width);
        console.log("Chiều dài: ", this.height);
    }
}
let geometry = new Rectangle("Hình chữ nhật", 10, 20);
geometry.getName();
geometry.getSize();
