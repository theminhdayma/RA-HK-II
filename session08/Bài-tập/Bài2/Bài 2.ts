type Obj1 = {
    name: string,
    age: number,
}

type Obj2 = {
    age: number,
    address: object,
}

type Obj3 = Obj1&Obj2;


function validatePerson(person: object): boolean {
    if ('name' in person && 'age' in person && 'address' in person) {
        return true;
    }
    return false;
}

let obj1: Obj1 = {
    name:"Minh",
    age: 18,
};
let obj2: Obj2 = {
    age: 18,
    address: [],
};
let obj3: Obj3 = {
    name:"Minh",
    age: 18,
    address: {},
};

console.log(validatePerson(obj1));
console.log(validatePerson(obj2));
console.log(validatePerson(obj3));

