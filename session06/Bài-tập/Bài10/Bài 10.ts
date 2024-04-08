
console.log("TÍNH TỔNG: ");
function sums(a: number | string, b: number | string): number | string{
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        return numA + numB;
    } else {
        return "Không hợp lệ";
    }
}
console.log("Tổng: ", sums("2", 1));
console.log("Tổng: ", sums("hello", 1));


console.log("TÍNH HIỆU:");
function signal(a: number | string, b: number | string): number | string{
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
    } else {
        return "Không hợp lệ";
    }
}
console.log("Trừ: ", signal("9", 2));
console.log("Trừ: ", signal("hello", 1));


console.log("TÍNH TÍCH: ");
function multips(a: number | string, b: number | string): number | string{
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        return numA * numB;
    } else {
        return "Không hợp lệ";
    }
}
console.log("Nhân: ", multips("4", 5));
console.log("Nhân: ", multips("hello", 1));


console.log("TÍNH TÍCH: ");
function divided(a: number | string, b: number | string): number | string{
    const numA = parseFloat(String(a));
    const numB = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        if (numB !== 0) {
            return numA / numB;
        } else {
            return "Không thể chia cho 0";
        }
    } else {
        return "Không hợp lệ";
    }
}
console.log("Nhân: ", divided("10", 2));
console.log("Nhân: ", divided("hello", 1));
