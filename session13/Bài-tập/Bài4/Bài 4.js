"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        console.log("Diện tích hình tròn: ", Math.PI * this.radius ** 2);
    }
    calculatePerimeter() {
        console.log("Chu vi hình tròn: ", 2 * Math.PI * this.radius);
    }
}
class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        console.log("Diện tích hình chữ nhật: ", this.width * this.height);
    }
    calculatePerimeter() {
        console.log("Chi vi hình chữ nhật: ", 2 * (this.width + this.height));
    }
}
let circle = new Circle(3);
circle.calculateArea();
circle.calculatePerimeter();
let rectangle = new Rectangle1(2, 3);
rectangle.calculateArea();
rectangle.calculatePerimeter();
