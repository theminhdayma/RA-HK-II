// Khởi tạo state 
const initialListProduct: any = [
    {
        id: 1,
        productName: "Cam sành",
        price: "20.000 đ",
        quantity: 10,
    },
    {
        id: 2,
        productName: "Bưởi ba roi",
        price: "50.000 đ",
        quantity: 15,
    },
];

// KHởi tạo hàm reducer
const reducerListProduct = (state = initialListProduct, action: any) => {
    switch (action.type) {
        case "BAITAP3":
            return state
        default:
            return state
    }
}

export default reducerListProduct