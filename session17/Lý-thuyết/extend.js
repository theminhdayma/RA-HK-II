"use strict";
/*
    extend trong generiic
*/
// function merge (gộp, hợp nhất)
function merge(item1, item2) {
    return Object.assign(item1, item2);
}
console.log(merge({ name: "Minh" }, { age: 18 }));
let obj1 = {
    name: "Hello"
};
let obj2 = {
    name: "Minh"
};
function test3(param) {
    return Object.assign(Object.assign({}, param), { fullName: param.firstName + param.lastName });
}
let result3 = test3({ firstName: "Thế", lastName: "Minh" });
console.log(result3);
function test4(param) {
    return;
}
// Đệ quy || Callback
/*
    - Đệ quy là hàm gọi lại chính nó
    - Lưu ý dùng đệ quy nên tránh việc làm chạy không điểm dừng
    ==> Chạy vô tận

    Dùng đệ quy tính tổng từ 1 đến 10
*/
function deQuy(a) {
    if (a == 1)
        return 1;
    return a + deQuy(--a);
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
