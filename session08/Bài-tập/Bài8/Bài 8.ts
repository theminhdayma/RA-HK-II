
type X = {id: number, nameUser: string};
type Y = {id: number, age: number};

function combineObjects(obj1: X, obj2: Y): X&Y{
    return {...obj1, ...obj2};
}

let person1: X = {
    id:1,
    nameUser: "Minh",
}

let person2: Y = {
    id: 2,
    age: 18,
}

console.log(combineObjects(person1, person2));
