// Khởi tạo state 
const initialCount: number = 0;

// Khởi tạo hàm reducerCount 
const reducerCount = (state=initialCount, action: any)=> {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DESCREASE":
            return state - 1
        default:
            return state;
    }
}

export default reducerCount;