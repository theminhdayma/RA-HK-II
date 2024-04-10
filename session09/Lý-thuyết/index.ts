
console.log(5&&6); // ==> 6
//Tính từ trái qua phải gặp falsy thì lấy, nếu không có lấy cuối cùng
// falsy :0, null, false, "", underfined, NaN
console.log(1|| null && 6); // ==> 1
//Ví dụ: So sánh và thì lấy null => so sánh hoặc (1 với null) thì lấy 1
// Chạy và trước hoặc sau

/* 
    intersection: giao nhau
*/

type A = {
    name: string,
}

type B = {
    name: string;
    address: string,
    id: number,
}

type C = A & B; // intersection

let c:C = {
    name: "Minh",
    address: "Hà Nội",
    id: 100,
}

console.log(c);

