"use strict";
/*
    Kiểu dữ liệu Generic <>
    .. Viết 1 function reverse các phần tử trong mảng

    input: [1,2,3,4,5,6]
    output: [6,5,4,3,2,1]

    input: ["m", "i", "n", "h"]
    output: ["h", "n", "i", "m"]
*/
function reverse(arr) {
    return arr.reverse();
}
console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(reverse(["m", "i", "n", "h"]));
/*
    Viết 1 function trả về 1 mảng chứa 2 phần tử
*/
function checkArrray(item1, item2) {
    return [item1, item2];
}
console.log(checkArrray(1, "hoa"));
