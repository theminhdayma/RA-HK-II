"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log("Sau khi tăng tốc: ", this.speed);
    }
    slowDown() {
        if (this.speed > 0) {
            this.speed -= 20;
            console.log("Sau khi giảm tốc: ", this.speed);
        }
        else {
            console.log("Đã dừng lại !!!");
        }
    }
    stop() {
        this.speed = 0;
        console.log("Stop !!!");
    }
}
let vehicle = new Vehicle(100);
vehicle.speedUp();
vehicle.slowDown();
vehicle.stop();
