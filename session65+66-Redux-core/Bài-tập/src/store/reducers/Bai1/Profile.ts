// Khởi tạo state 
const initialProfile: any = {
    id: 1,
    name: "Nguyễn Thế Minh",
    sex: "Nam",
    dateOfBirth: "23/12/2005",
    address: "Phúc Thọ - Hà Nội",
};

// KHởi tạo hàm reducer
const reducerProfile = (state = initialProfile, action: any) => {
    switch (action.type) {
        case "BAITAP1":
            return state
        default:
            return state
    }
}

export default reducerProfile