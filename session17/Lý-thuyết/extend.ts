/* 
    extend trong generiic
*/

// function merge (gộp, hợp nhất)
function merge<T extends {name: string, age?: number}, U> (item1: T, item2: U): T & U {
    return Object.assign(item1, item2)
}

console.log(merge({name:"Minh"}, {age: 18}));


//Toán tử nullish (??)

// let result1 = undefined??5
// let result2 = 1??5
// console.log(result1);
// console.log(result2);

// & toán tử: là intersection
// ! toán tử: là non null
// ? : optional chain

// function add(a:number, b?: number): number {
//     return b?a+b:a
// }

// console.log(add(1,2));
// console.log(add(4));

/* 
    Khi khái báo kiểu dữ liệu: Type và Interface
       - Type: 
           + Có thể dùng union và intersection
           + Không thể implement với class
           + thường khai báo các kiểu dữ liệu

       - interface: 
           + Không thể dùng được union và intersection
           + Có thể kế thừa từ interface
           + co thể implement (triển khai) với class
           + thường khai báo các thuộc tính và phương thức
           NESTJS + typescipt + react js
*/

type A = {
    name: string
}

type B = {
    age: number
}

let obj1: A = {
    name: "Hello"
}

interface C {
    name: string
}

let obj2: C = {
    name: "Minh"
}



function test3(param: {firstName: string, lastName: string}) {
    return {...param, fullName: param.firstName + param.lastName}
}

let result3 = test3({firstName: "Thế", lastName: "Minh"})
console.log(result3);
// Chuyển sang dạng generic

interface D {
    firstName: string
    lastName: string
}

function test4 <T extends D>(param: T){
    return 
}

// Đệ quy || Callback
/* 
    - Đệ quy là hàm gọi lại chính nó
    - Lưu ý dùng đệ quy nên tránh việc làm chạy không điểm dừng
    ==> Chạy vô tận

    Dùng đệ quy tính tổng từ 1 đến 10
*/

function deQuy(a: number): number {
    if(a==1)
        return 1
    return a + deQuy(--a)
}
/* 
    Luồng chạy: 
    5 + deQuy(4)
    5 + 4 + deQuy(3) .....
*/

/* 
    Dùng đệ quy để giải quyết bài toán
    sử dụng flatMath
    input : [[1,2], 3, [4, [5]]]
    output: [1,2,3,4,5]
    ==> đệ quy giải quyết bài toán
*/

console.log(deQuy(10));
