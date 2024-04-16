"use strict";
// Compile-time Polymorphism (Method Overloading)
class MathOperations {
    // add(a: number, b: number): number;
    // add(a: string, b: string): string;
    add(a, b) {
        return a;
    }
}
const math = new MathOperations();
console.log(math.add(5, 10));
console.log(math.add("Hello, ", "World!"));
// Run-time Polymorphism (Method Overriding)
class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}
function animalSound(animal) {
    animal.makeSound();
}
const dog = new Dog();
const cat = new Cat();
animalSound(dog); // Output: "Woof!" (Dog's sound)
animalSound(cat); // Output: "Meow!" (Cat's sound)
// Trong ví dụ này, trước tiên chúng tôi chứng minh tính 
//đa hình trong thời gian biên dịch thông qua việc nạp chồng 
//phương thức trong MathOperationslớp. Chúng tôi xác định hai 
//phiên bản của addphương thức: một phiên bản để cộng số và một 
//phiên bản khác để nối chuỗi. Phương thức thích hợp được chọn 
//tại thời điểm biên dịch dựa trên các loại đối số được sử dụng 
//trong lệnh gọi hàm.
// Tiếp theo, chúng tôi chứng minh tính đa hình trong thời gian 
//chạy thông qua ghi đè phương thức trong các lớp Animal, Dog, và Cat.
// Lớp này Animalcó một makeSoundphương thức cung cấp âm thanh chung. 
//Cả hai lớp Dogvà Catđều ghi đè makeSoundphương thức này để cung cấp 
//âm thanh cụ thể của chúng. Khi chúng ta gọi animalSoundhàm với các 
//đối tượng khác nhau của Dogvà Cat, makeSoundphương thức thích hợp sẽ 
//được xác định động trong thời gian chạy dựa trên loại đối tượng thực tế.
// Tính đa hình cho phép bạn viết mã linh hoạt và có khả năng mở rộng 
//hơn bằng cách xử lý các đối tượng dựa trên giao diện chung thay vì 
//các loại cụ thể của chúng. Nó đóng một vai trò quan trọng trong việc
// thiết kế các ứng dụng quy mô lớn và đơn giản hóa sự tương tác giữa 
//các lớp và mô-đun khác nhau.
