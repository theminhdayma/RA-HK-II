
class ShopItem {
    protected id: number
    protected name: string
    protected price: number
    protected isAvailable: boolean

    constructor(id: number, name: string, price: number, isAvailable: boolean){
        this.id = id
        this.name = name
        this.price = price
        this.isAvailable = isAvailable
    }

    formatPrice(price: number): string {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    getInfo(): void {
        const formattedPrice = this.formatPrice(this.price);
        console.log(`ID: ${this.id}`);
        console.log(`Tên sản phẩm: ${this.name}`);
        console.log(`Giá thuê: : ${formattedPrice}đ`);    
    }
}

class LendingItem extends ShopItem {
    customerNames: string[] = [];
    stock: number;

    constructor(id: number, name: string, price: number, isAvailable: boolean, customerNames: string[], stock: number){
        super(id, name, price, isAvailable)
        this.customerNames = customerNames
        this.stock = stock
    }

    lendItem(name: string): void {
        if (this.stock > 0) {
            this.customerNames.push(name);
            this.stock -= 1;
            if (this.stock === -1) {
                this.isAvailable = false;
                console.log(`Xin lỗi ${name}, sản phẩm ${this.name} đã hết hàng`);
            }
        } else {
            console.log(`Xin lỗi ${name}, sản phẩm ${this.name} đã hết hàng`);
        }
    }

    returnItem(name: string){
        if (this.customerNames.includes(name)) {
            const index = this.customerNames.indexOf(name);
            this.customerNames.splice(index, 1);
            this.stock += 1;
            console.log(`${name} đã trả lại ${this.name}`);
        } else {
            console.log(`${name} không thuê sản phẩm này`);
        }
        if(this.stock > 0){
            this.isAvailable = true;
        }
    }

    getInfo(): void {
        console.log("Thông tin sản phẩm hiện tại: ".toUpperCase());   
        super.getInfo();
        console.log(`Khách hàng đã thuê: ${this.customerNames.join(", ")}`);
        console.log(`Số lượng hiện tại: ${this.stock}`);
    }
}

let lendingItem = new LendingItem(1, "Sách", 100000, true, [], 3);
console.log("Trước khi có khách hàng thuê".toUpperCase());
lendingItem.getInfo();

console.log("==================================");  
console.log("Sau khi có khách hàng thuê".toUpperCase());
lendingItem.lendItem("Quang");
lendingItem.lendItem("Linh");
lendingItem.lendItem("Minh")

// Thông tin sản phẩm hiện tại
lendingItem.getInfo();

console.log("Sau khi có khách hàng trả sản phẩm".toUpperCase());
lendingItem.returnItem("Quang");
lendingItem.getInfo();


