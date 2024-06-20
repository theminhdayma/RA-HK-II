// Tạo interfce or type
// export ra các file lhacs cần dùng
// neetjs

export interface ProductType {
    id: number;
    name: string;
    img: string;
    introduce: string;
    quantity: number;
    price: number;
    number: number;
    status: boolean;
}

export interface Action {
    type: string
    payload: any
}
