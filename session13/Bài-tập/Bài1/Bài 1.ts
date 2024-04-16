
abstract class Shape {
    name: string
    constructor (name: string){
        this.name = name
    }

    getName(): void {
        console.log("Tên hình: ", this.name); 
    }

    abstract getSize(): void; // Trìu tượng
}

class Rectangle extends Shape {
    width: number
    height: number

    constructor (name: string, width: number, height: number){
        super(name)
        this.width = width
        this.height = height
    }

    getSize(): void {
        console.log("Chiều rộng: ", this.width);
        console.log("Chiều dài: ", this.height);       
    }
}

let geometry = new Rectangle ("Hình chữ nhật", 10, 20);
geometry.getName();
geometry.getSize();