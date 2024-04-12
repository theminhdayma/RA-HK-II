"use strict";
class Shape {
    calculateArea() { }
    calculatePerimeter() { }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        console.log("Diện tích của hình chữ nhật: ", this.width * this.height);
    }
    calculatePerimeter() {
        console.log("Chi vi của hình chữ nhật: ", 2 * (this.width + this.height));
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        console.log("Diện tích hình tròn:", Math.PI * this.radius ** 2);
    }
    calculatePerimeter() {
        console.log("Chi vi của hình tròn: ", 2 * Math.PI * this.radius);
    }
}
//Hình chữ nhật
let rectangle = new Rectangle(2, 3);
rectangle.calculateArea();
rectangle.calculatePerimeter();
//Hình tròn
let circle = new Circle(3);
circle.calculateArea();
circle.calculatePerimeter();
