class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription(): string {
        return `Thông tin: Name: ${this.name}, Price: ${this.price}`;
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    public getDescription(): string {
        return `${super.getDescription()}, Brand: ${this.brand}`;
    }
}

let electronics = new Electronics ("Bỉm", 100000, "Mẹ và con");
console.log(electronics.getDescription());
