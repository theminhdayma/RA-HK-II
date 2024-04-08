function calculate(operation: string): void {
    const input1: HTMLInputElement = <HTMLInputElement>document.getElementById("input1");
    const input2: HTMLInputElement = <HTMLInputElement>document.getElementById("input2");
    const resultDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("result");
    let result: number | string;

    const num1: number | string = input1.value;
    const num2: number | string = input2.value;

    switch(operation) {
        case 'sum':
            result = sum(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        case 'exponential':
            result = exponential(num1, num2);
            break;
        case 'square-root':
            result = squareRoot(num1);
            break;
        default:
            result = "Lỗi !!!";
    }

    resultDiv.innerText = "Kết quả: " + result;
}

function sum(a: number | string, b: number | string): number | string {
    const numA: number = parseFloat(String(a));
    const numB: number = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        return numA + numB;
    } else {
        return "Lỗi !!!";
    }
}

function subtract(a: number | string, b: number | string): number | string {
    const numA: number = parseFloat(String(a));
    const numB: number = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
    } else {
        return "Lỗi !!!";
    }
}

function multiply(a: number | string, b: number | string): number | string {
    const numA: number = parseFloat(String(a));
    const numB: number = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        return numA * numB;
    } else {
        return "Lỗi !!!";
    }
}

function divide(a: number | string, b: number | string): number | string {
    const numA: number = parseFloat(String(a));
    const numB: number = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        if (numB !== 0) {
            return numA / numB;
        } else {
            return "Lỗi !!!";
        }
    } else {
        return "Lỗi !!!";
    }
}

function exponential(a: number | string, b: number | string): number | string {
    const numA: number = parseFloat(String(a));
    const numB: number = parseFloat(String(b));

    if (!isNaN(numA) && !isNaN(numB)) {
        return Math.pow(numA, numB);
    } else {
        return "Lỗi !!!";
    }
}

function squareRoot(a: number | string): number | string {
    const numA: number = parseFloat(String(a));

    if (!isNaN(numA)) {
        if (numA >= 0) {
            return Math.sqrt(numA);
        } else {
            return "Lỗi !!!";
        }
    } else {
        return "Lỗi !!!";
    }
}
