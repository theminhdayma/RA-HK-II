class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getCircle(): void {
        console.log("Bán kính: ", this.radius); 
        console.log("Diện tích: ", Math.PI * this.radius ** 2); 
        console.log("Chu vi: ", 2 * Math.PI * this.radius);     
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }
}

let circle = new Circle(5);

console.log("Trước khi thay đổi bán kính: ");
circle.getCircle();

console.log("Sau khi thay đổi bán kính: ");
circle.setRadius(6);
circle.getCircle();




