/* 
    1. Abstract class:
        - Một abstract class là một lớp trừu tượng mà không thể tạo ra 
        các thực thể của nó mà phải tạo ra các thực thể ở lớp con

        - Các lớp con kế thừa từ abstract class và triển khai các phương 
        thức trừu tượng
*/

abstract class Car {
    abstract sayHello(): void;
}

class Car1 extends Car {
    sayHello(): void {
        console.log("Đây là loại xe tốt nhất");       
    }
}

/* 
    2. Interface:
        - Một interface chỉ định các phương thức mà lớp phải triển khai
        - Nó không chứa cài đặt cho bất kỳ phương thức nào
        - Một lớp có thể triển khai nhiều interface
*/

interface SayHello {
    say(): void;
}

class Car2 implements SayHello {
    say(): void {
        console.log("Đây là loại xe tệ nhất");       
    }
}
