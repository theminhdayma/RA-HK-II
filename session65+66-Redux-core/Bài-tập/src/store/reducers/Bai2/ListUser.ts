// Khởi tạo state 
const initialListUser: any = [
    {
        id: 1,
        name: "Nguyễn Thế Minh",
        sex: "Nam",
        dateOfBirth: "23/12/2005",
        address: "Phúc Thọ - Hà Nội",
    },
    {
        id: 2,
        name: "Trần Thị Minh Sâm",
        sex: "Nữ",
        dateOfBirth: "28/07/2006",
        address: "Phúc Thọ - Hà Nội",
    },
];

// KHởi tạo hàm reducer
const reducerListUser = (state = initialListUser, action: any) => {
    switch (action.type) {
        case "BAITAP2":
            return state
        default:
            return state
    }
}

export default reducerListUser