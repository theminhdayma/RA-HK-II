

interface Geometry {
    calculateArea(): void
    calculatePerimeter(): void

}

class Circle implements Geometry{
    private radius: number

    constructor(radius: number){
        this.radius = radius
    }

    calculateArea(): void {
        console.log("Diện tích hình tròn: ", Math.PI * this.radius ** 2);       
    }

    calculatePerimeter(): void {
        console.log("Chu vi hình tròn: ", 2 * Math.PI * this.radius);       
    }
}

class Rectangle1 implements Geometry{
    private width: number
    private height: number

    constructor(width: number, height: number){
        this.width = width
        this.height = height
    }

    calculateArea(): void {
        console.log("Diện tích hình chữ nhật: ", this.width * this.height);       
    }

    calculatePerimeter(): void {
        console.log("Chi vi hình chữ nhật: ", 2 * (this.width + this.height));       
    }
}

let circle = new Circle (3);
circle.calculateArea()
circle.calculatePerimeter()

let rectangle = new Rectangle1(2,3);
rectangle.calculateArea();
rectangle.calculatePerimeter();