let startString: string = "hello world !!!";
let resultString: string = "";

for (let char of startString) {
    if (!resultString.includes(char)) {
        resultString += char;
    }
}

console.log("Kết quả:", resultString);