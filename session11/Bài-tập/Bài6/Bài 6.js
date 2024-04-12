"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        return `Thông tin: Name: ${this.name}, Price: ${this.price}`;
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        return `${super.getDescription()}, Brand: ${this.brand}`;
    }
}
let electronics = new Electronics("Bỉm", 100000, "Mẹ và con");
console.log(electronics.getDescription());
