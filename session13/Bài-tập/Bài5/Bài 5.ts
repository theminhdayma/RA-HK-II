

interface changeSpeed {
    speedUp():void
    slowDown(): void
    stop(): void
}

class Vehicle implements changeSpeed {
    private speed: number

    constructor(speed: number){
        this.speed = speed
    }

    speedUp(): void {
        this.speed += 10
        console.log("Sau khi tăng tốc: ", this.speed);      
    }

    slowDown(): void {
        if(this.speed > 0){
            this.speed -=20
            console.log("Sau khi giảm tốc: ", this.speed);          
        }else{
            console.log("Đã dừng lại !!!");            
        }
    }

    stop(): void {
        this.speed = 0
        console.log("Stop !!!");       
    }
}

let vehicle = new Vehicle(100);
vehicle.speedUp();
vehicle.slowDown();
vehicle.stop();