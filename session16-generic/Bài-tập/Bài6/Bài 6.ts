


let number: number = 2;
let string: string = "3"

// if(number === string){
//     console.log("giống nhau");
// }else {
//     console.log("Khác nhau");   
// }

// ==> Vì 2 kiểu dữ liệu đang để khác nhau nên ra không thể
// so sánh được

if(number.toString() === string || number === +string){
    console.log("giống nhau");
}else {
    console.log("Khác nhau");   
}

// ==> Khi chyển về cùng kiểu dữ liệu thì hoàn toàn có thể so sánh