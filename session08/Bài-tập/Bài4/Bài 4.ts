
function check(data: number|number[]): number|number[]|undefined {
    let result;
    if(typeof data === "number"){
        result = data**2;
    }else if(Array.isArray(data)){
        result = data.map(item => item ** 2);
    }
    return result;
}

console.log(check(8));
console.log([1,2,3,4,5]);

