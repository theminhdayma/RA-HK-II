"use strict";
function array(arr, index1, index2) {
    if (!(arr.length < 2 || index1 < 0 || index2 < 0 || index1 >= arr.length || index2 >= arr.length)) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    return arr;
}
console.log(array([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 5));
console.log(array([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 11));
