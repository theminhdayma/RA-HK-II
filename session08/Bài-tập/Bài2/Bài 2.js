"use strict";
function validatePerson(person) {
    if ('name' in person && 'age' in person && 'address' in person) {
        return true;
    }
    return false;
}
let obj1 = {
    name: "Minh",
    age: 18,
};
let obj2 = {
    age: 18,
    address: [],
};
let obj3 = {
    name: "Minh",
    age: 18,
    address: {},
};
console.log(validatePerson(obj1));
console.log(validatePerson(obj2));
console.log(validatePerson(obj3));
