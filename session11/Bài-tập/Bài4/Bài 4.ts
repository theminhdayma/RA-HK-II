class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(count: number): void {
        this.speed -= count;
    }

    speedUp(count: number): void {
        this.speed += count;
    }

    showSpeed(): void {
        console.log(`Tốc độ hiện tại ${this.name} (ID: ${this.id}): ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
}

let myBicycle = new Bicycle("Mercedes-Benz", 80, 101, 14);
console.log("Tốc độ ban đầu: ");
myBicycle.showSpeed();

console.log("Sau khi tăng tốc");
myBicycle.speedUp(10);
myBicycle.showSpeed();

console.log("Sau khi giảm tốc");
myBicycle.slowDown(20);
myBicycle.showSpeed();

