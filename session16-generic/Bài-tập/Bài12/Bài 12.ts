function checkString<T extends string>(sentence: T): string {
    let string = sentence.split(" ");
    let longestString = "";

    for (let str of string) {
        let charArray: string[] = [];

        let isUnique = true;
        for (let char of str) {
            if (charArray.includes(char)) {
                isUnique = false;
                break;
            }
            charArray.push(char);
        }

        if (isUnique && str.length > longestString.length) {
            longestString = str;
        }
    }

    return longestString;
}

let str1 = "hello world apple banana orange pumpkin cucumber"
let str2 = "Thế Minh là một người deptrai và tốt bụng"
console.log(checkString(str1));
console.log(checkString(str2));