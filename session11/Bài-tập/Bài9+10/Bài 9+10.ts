class Shape {
    calculateArea(): void {}
    calculatePerimeter (): void {}
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): void {
        console.log("Diện tích của hình chữ nhật: ", this.width * this.height);       
    }

    calculatePerimeter(): void {
        console.log("Chi vi của hình chữ nhật: ", 2 * (this.width + this.height));       
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): void {
        console.log("Diện tích hình tròn:", Math.PI * this.radius ** 2);
    }

    calculatePerimeter(): void {
        console.log("Chi vi của hình tròn: ", 2 * Math.PI * this.radius);       
    }
}

//Hình chữ nhật
let rectangle = new Rectangle(2, 3);
rectangle.calculateArea();
rectangle.calculatePerimeter();

//Hình tròn
let circle = new Circle(3);
circle.calculateArea();
circle.calculatePerimeter();


