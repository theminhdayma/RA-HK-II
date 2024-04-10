"use strict";
/*
    Để kiểm tra kiểu dữ liệu thì dùng typeof
    Kiểu dữ liệu của array là object
    Làm sao để phân biệt array và object

        Dùng typeof không giải quyết được vấn đề
        vì typeof của array và object đều là object
        ==> Array.isArray()
            ==> Nếu là array thì trả về true, ngược lại trả về false
*/
// let number1 = [1,2,3,4,5];
// console.log("typeof number1: ", typeof number1);
// console.log("typeof array", Array.isArray(number1));
// Kiểu kết hợp ( nhị phân )
// console.log(5|6); // ==> 7
/*
    CÁC KIỂU DỮ LIỆU NÂNG CAO TRONG TYPESCRIPT
*/
// Kiểu union type
let text1 = "hello";
text1 = 6;
// Hàm tỉnh tổng
// function sum(a:number|string, b:number): number|string {
//     //Kiểm tra điều kiện 
//     if(typeof a === typeof b){
//         return a + b;
//     }
// }
// console.log(sum(5,6));
let array1 = [5, "Minh"];
array1.push(1);
console.log(1., array1);
// ==> Kiểu Union
let array2 = [3, "Sâm"];
array2.push(1);
console.log(2., array2);
let test1 = "";
