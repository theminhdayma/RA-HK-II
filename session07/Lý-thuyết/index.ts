
// Array
// Cách 1 
// let students: string[] = ["hoa"]
// ==> phần tử chỉ có string và tương tự vậy

// Cách 2
let numbers: Array<number> = [2,3,4,5];


// Object
let cats: {name:string, height: number, color: string} = {
    name: "tony",
    height: 50,
    color: "while"
}

enum Role{
    admin, // Không gán mặc định là 0
    user,
}

let person: {name: string, age: number, role: Role.admin}= {
    name: "Minh",
    age: 20,
    role: 0,
}

function sayHello(): void {
    console.log("Hello !!!");
    
}
console.log(sayHello()); // underfiend

function sum(a: number, b:number): number{
    return a + b;
}

console.log(sum(5, 6));

/* 
    unknowns: chưa biết - không biết
    cũng giống như any nhưng nó chặt chẽ hơn
    Khi sử dụng phải kiểm tra nó
*/

function typeAny(userName: unknown): void {
    if(typeof userName == "string"){
        console.log("userName: ", userName.toUpperCase());
    }else{
        console.log("Không phải là string");       
    }    
}

typeAny("Minh");
typeAny(8);

/* 
    never: Thường dùng trong vòng lặp vô tận, không có điểm kết thúc
*/

function typeNever():never {
    while(true){
        console.log("Đây là vòng lặp tuần hoàn !!");       
    }
}

// typeNever();