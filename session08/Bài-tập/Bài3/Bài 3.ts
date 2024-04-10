
type Square = {
    square: string,
    sideLength:number,
}
type Circle = {
    circle: string,
    radius: number,
}

function calculateArea(type: Square | Circle): number {
    if("square" in type){
        return type.sideLength * type.sideLength;
    }else{
        return Math.PI*(type.radius ** 2);
    }
}

let geometry1: Square = {
    square: "Square",
    sideLength: 10,
}

let geometry2: Circle = {
    circle: "Circle",
    radius: 10,
}

console.log(calculateArea(geometry1));
console.log(calculateArea(geometry2));

