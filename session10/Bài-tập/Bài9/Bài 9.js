"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log("Tên sách: ", book.getTitle());
            console.log("Tác giả: ", book.getAuthor());
            console.log("==============================");
        });
    }
}
const book1 = new Book("Nhà giả kim", "Paulo Coelho");
const book2 = new Book("Bài học diệu kỳ từ chiếc xe rác ", "David J. Pollay");
const book3 = new Book("Đời ngắn đừng ngủ dài", "Robin Sharma");
const book4 = new Book("Giới hạn của bạn chỉ là xuất phát điểm của tôi", "Mèo Maverick");
const book5 = new Book("Bạn có một thư mới chưa đọc!", "Trương Hạo Thần");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.showBooks();
