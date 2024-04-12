

//TÍNH KẾ THỪA
class Parent {
    userName: string
    password: string

    constructor(userName: string, password: string){
        this.userName = userName
        this.password = password
    }

    sayHello(): void {
        console.log("Hello ", this.userName);
        
    }
}

//Class con muốn kế thừa class cha thì bắt buộc phải dùng từ khóa extends (kế thừa)
class Child extends Parent {
    address: string

    constructor(a: string, b: string, address: string) {
        super(a, b);
        this.userName = a
        this.password = b
        this.address = address
    }
    sayGoodbye(): void {
        console.log("Tạm biệt ", this.userName);       
    }
}

let child1 = new Child("Minh", "123456", "Hà Nội")
console.log(child1);
child1.sayHello();
child1.sayGoodbye();

class Child1 extends Child {
    constructor(userName: string, password: string, address: string){
        super(userName, password, address)
        this.userName = userName,
        this.password = password
        this.address = address
    }
}

let child2 = new Child1 ("Nam", "123", "Sơn Tây");
child2.sayGoodbye();









