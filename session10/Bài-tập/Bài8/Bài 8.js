"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getRectangle() {
        console.log("Chiều rộng: ", this.width);
        console.log("Chiều dài: ", this.height);
        console.log("Diện tích: ", this.width * this.height);
        console.log("Chu vi: ", 2 * (this.width + this.height));
    }
    setLength(width, height) {
        this.width = width;
        this.height = height;
    }
}
const rectangle = new Rectangle(4, 5);
console.log("Hình chữ nhật trước khi cập nhật:");
rectangle.getRectangle();
console.log("Hình chữ nhật sau khi cập nhật:");
rectangle.setLength(6, 7);
rectangle.getRectangle();
