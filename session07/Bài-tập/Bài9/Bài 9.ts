

function checkPrime(array: number[]) {
    for (const item of array) {
        if(item < 2){
            return false;
        }
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(item); i++){
            if(item % i == 0){
                isPrime = false;
                break;
            }
        }
        if(!isPrime) return false;
    }
    return true;
}

let array1: Array<number> = [3, 5, 7, 11, 13];
let array2: Array<number> = [2, 3, 4, 5, 6, 7, 8];

console.log(checkPrime(array1));
console.log(checkPrime(array2));


