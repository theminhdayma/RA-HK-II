"use strict";
/*
    1. Abstract class:
        - Một abstract class là một lớp trừu tượng mà không thể tạo ra
        các thực thể của nó mà phải tạo ra các thực thể ở lớp con

        - Các lớp con kế thừa từ abstract class và triển khai các phương
        thức trừu tượng
*/
class Car {
}
class Car1 extends Car {
    sayHello() {
        console.log("Đây là loại xe tốt nhất");
    }
}
class Car2 {
    say() {
        console.log("Đây là loại xe tệ nhất");
    }
}
