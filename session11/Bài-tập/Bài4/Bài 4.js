"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(count) {
        this.speed -= count;
    }
    speedUp(count) {
        this.speed += count;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại ${this.name} (ID: ${this.id}): ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
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
