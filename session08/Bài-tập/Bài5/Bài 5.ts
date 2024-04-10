
/* 
    Union Types cho phép một biến hoặc tham 
    số có thể chứa giá trị thuộc nhiều kiểu 
    dữ liệu khác nhau
*/

let type1: string|number;
console.log("Kiểu Union Types: ");
type1 = 10;
console.log("Kiểu number: ", type1);

type1 = "Minh";
console.log("Kiểu string: ", type1);

/* 
    Intersection Types cho phép kết hợp nhiều kiểu dữ liệu 
    lại với nhau để tạo ra một kiểu dữ liệu mới, chứa tất cả
    các thuộc tính của các kiểu dữ liệu được kết hợp.
*/

type A = {number: number};
type B = {string: string};
type C = A & B;

let c: C = {
    number: 18,
    string: "hello",
}

console.log("Kiểu Intersection Types: ", c);








