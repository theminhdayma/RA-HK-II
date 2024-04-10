"use strict";
function combineObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let person1 = {
    id: 1,
    nameUser: "Minh",
};
let person2 = {
    id: 2,
    age: 18,
};
console.log(combineObjects(person1, person2));
