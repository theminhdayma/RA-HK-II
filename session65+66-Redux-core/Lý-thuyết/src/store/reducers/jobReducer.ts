// Khởi tạo state 
const initialJob: any = [{
    id: 1,
    name: "Thế Minh",
    status: false,
}];

// KHởi tạo hàm reducer
const  reducerJob = (state=initialJob, action: any) => {
    switch (action.type) {
        case "ADD":
            return [...state,action.payload];
        case "DELETE":
            
            return state;
        default:
            return state;
    }
}

export default reducerJob;