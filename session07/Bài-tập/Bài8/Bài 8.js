"use strict";
class Book {
    constructor() {
        this.title = "Đắc Nhân Tâm";
        this.author = "Dale Carnegie";
        this.price = 200000;
    }
    printBook() {
        console.log(`Tác phẩm: ${this.title}`);
        console.log(`Tác giả: ${this.author}`);
        console.log(`Giá: ${this.price}`);
    }
    updateBook(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
let book = new Book();
console.log("Thông tin ban đầu:".toUpperCase());
book.printBook();
console.log("==================================================");
book.updateBook("Đừng Bao Giờ Đi Ăn Một Mình", "Keith Ferrazzi", 250000);
console.log("Sau khi cập nhật thông tin:".toUpperCase());
book.printBook();
