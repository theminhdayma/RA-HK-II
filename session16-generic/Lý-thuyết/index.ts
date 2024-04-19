function type<Type> (a: Type): Type{
    return a;   
}

console.log(type(1));
console.log(type("Minh"));
console.log(type(false));
console.log(type(undefined));

function test <T>(a: T): T[]{
    if(Array.isArray(a)){
        return [a[a.length - 1]]
    }else {
        return [a]
    }
}

console.log(test(6));
console.log(test([1,2,3,4,5,6]));
console.log(test(["m", 7, "n", "h"]));

