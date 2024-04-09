
function deleteFalsy(obj: { [key: string]: any }): void {
    for (let index in obj) {
        if (!obj[index]) {
            delete obj[index];
        }
    }
}

let obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a'    
};

deleteFalsy(obj);
console.log(obj);

