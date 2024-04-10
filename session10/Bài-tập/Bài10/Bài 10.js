"use strict";
class Book1 {
    constructor(title, author, quantity = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getQuantity() {
        return this.quantity;
    }
    increaseQuantity() {
        this.quantity++;
    }
}
class Library1 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        const existingBook = this.books.find(existingBook => existingBook.getTitle() === book.getTitle() && existingBook.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity();
        }
        else {
            this.books.push(book);
        }
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log("Tên sách: ", book.getTitle());
            console.log("Tác giả: ", book.getAuthor());
            console.log("Số lượng: ", book.getQuantity());
            console.log("==============================");
        });
    }
}
let book01 = new Book1("Nhà giả kim", "Paulo Coelho");
let book02 = new Book1("Bài học diệu kỳ từ chiếc xe rác ", "David J. Pollay");
let book03 = new Book1("Đời ngắn đừng ngủ dài", "Robin Sharma");
let book04 = new Book1("Giới hạn của bạn chỉ là xuất phát điểm của tôi", "Mèo Maverick");
let book05 = new Book1("Bạn có một thư mới chưa đọc!", "Trương Hạo Thần");
let book06 = new Book1("Giới hạn của bạn chỉ là xuất phát điểm của tôi", "Mèo Maverick");
let book07 = new Book1("Bạn có một thư mới chưa đọc!", "Trương Hạo Thần");
const library1 = new Library1();
library1.addBook(book01);
library1.addBook(book02);
library1.addBook(book03);
library1.addBook(book04);
library1.addBook(book05);
library1.addBook(book06);
library1.addBook(book07);
library1.showBooks();
