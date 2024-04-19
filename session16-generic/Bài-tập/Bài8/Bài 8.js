"use strict";
function isGenericObject(value) {
    return typeof value === 'object' && !Array.isArray(value);
}
function mergeObjects(obj1, obj2) {
    let merged = Object.assign({}, obj1);
    for (let key in obj2) {
        if (key in obj1) {
            let value2 = obj2[key];
            let value1 = obj1[key];
            if (isGenericObject(value1) && isGenericObject(value2)) {
                merged[key] = mergeObjects(value1, value2);
            }
            else {
                merged[key] = value2;
            }
        }
    }
    return merged;
}
let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};
let object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9
        }
    },
    g: 10
};
console.log(mergeObjects(object1, object2));
