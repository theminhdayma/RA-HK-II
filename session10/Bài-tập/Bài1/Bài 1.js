"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name,
            this.year = year,
            this.company = company;
    }
}
let vehicle1 = new Vehicle("Celerio", 2020, "Suzuki");
let vehicle2 = new Vehicle("Maybach", 2022, "Mercedes Benz");
console.log(vehicle1);
console.log(vehicle2);
