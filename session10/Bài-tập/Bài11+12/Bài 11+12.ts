class Book2 {
    private id: number;
    private title: string;
    private author: string;
    private quantity: number;

    constructor(id: number, title: string, author: string, quantity: number = 1) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    setUpdate(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
    getQuantity(): number {
        return this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }
}

class Library2 {
    private books: Book2[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book2): void {
        let checkBook = this.books.find(checkBook => checkBook.getTitle() === book.getTitle() && checkBook.getAuthor() === book.getAuthor());
        if (checkBook) {
            checkBook.increaseQuantity();
        } else {
            this.books.push(book);
        }
    }

    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log("ID: ", book.getId());           
            console.log("Tên sách: ", book.getTitle());   
            console.log("Tác giả: ", book.getAuthor());
            console.log("Số lượng: ", book.getQuantity());           
            console.log("==============================");                      
        });
    }

    updateBookById(bookId: number, newTitle: string, newAuthor: string): void {
        let bookToUpdate = this.books.find(book => book.getId() === bookId);
        if (bookToUpdate) {
            bookToUpdate.setUpdate(newTitle, newAuthor);
        } else {
            console.log("Không tìm thấy sách có ID tương ứng để cập nhật.");
        }
    }   

    searchBooksByName(bookName: string): void {
        let searchBook = this.books.filter(book => book.getTitle() === bookName);
        if (searchBook.length > 0) {
            console.log("Danh sách tìm kiếm: ");           
            searchBook.forEach(book => {
                console.log("ID: ", book.getId());           
                console.log("Tên sách: ", book.getTitle());   
                console.log("Tác giả: ", book.getAuthor());
                console.log("Số lượng: ", book.getQuantity());           
                console.log("=============================="); 
            });
        } else {
            console.log("Không tìm thấy tên sách");           
        }
    }
}

let book001 = new Book2(1,"Nhà giả kim", "Paulo Coelho");
let book002 = new Book2(2,"Bài học diệu kỳ từ chiếc xe rác ", "David J. Pollay");
let book003 = new Book2(3,"Đời ngắn đừng ngủ dài", "Robin Sharma");
let book004 = new Book2(4,"Giới hạn của bạn chỉ là xuất phát điểm của tôi", "Mèo Maverick");
let book005 = new Book2(5,"Bạn có một thư mới chưa đọc!", "Trương Hạo Thần");
let book006 = new Book2(6,"Giới hạn của bạn chỉ là xuất phát điểm của tôi", "Mèo Maverick");
let book007 = new Book2(7,"Bạn có một thư mới chưa đọc!", "Trương Hạo Thần");

const library2 = new Library2();

library2.addBook(book001);
library2.addBook(book002);
library2.addBook(book003);
library2.addBook(book004);
library2.addBook(book005);
library2.addBook(book006);
library2.addBook(book007);

library2.showBooks();

console.log("Thư Viện sau khi cập nhật");
library2.updateBookById(4, "Tôi yêu hòa Bình", "Nguyễn Thế Minh");
library2.showBooks();

library2.searchBooksByName("Nhà giả kim");
library2.searchBooksByName("hello");
