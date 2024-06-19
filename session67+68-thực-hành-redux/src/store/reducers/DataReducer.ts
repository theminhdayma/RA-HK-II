interface Book { 
    id: number;
    nameBook: string;
    nameStudent: string;
    dateOfHire: string;
    payDay: string;
    status: boolean;
}

const initialData: Book[] = [
    {
        id: 1,
        nameBook: "Đắc Nhân Tâm",
        nameStudent: "Nguyễn Thế Minh",
        dateOfHire: "2024/03/01",
        payDay: "2024/04/01",
        status: true,
    },
    {
        id: 2,
        nameBook: "Nhà Giả Kim",
        nameStudent: "Trần Văn An",
        dateOfHire: "2024/02/15",
        payDay: "2024/03/15",
        status: false,
    },
    {
        id: 3,
        nameBook: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
        nameStudent: "Phạm Thị Hoa",
        dateOfHire: "2024/01/20",
        payDay: "2024/02/20",
        status: true,
    },
    {
        id: 4,
        nameBook: "Bí Mật Của Nước",
        nameStudent: "Lê Minh Tuấn",
        dateOfHire: "2024/03/05",
        payDay: "2024/04/05",
        status: false,
    },
    {
        id: 5,
        nameBook: "Hành Trình Về Phương Đông",
        nameStudent: "Nguyễn Thanh Hương",
        dateOfHire: "2024/02/25",
        payDay: "2024/03/25",
        status: true,
    },
    {
        id: 6,
        nameBook: "Mắt Biếc",
        nameStudent: "Trần Quốc Bảo",
        dateOfHire: "2024/01/30",
        payDay: "2024/02/28",
        status: true,
    },
    {
        id: 7,
        nameBook: "Dế Mèn Phiêu Lưu Ký",
        nameStudent: "Nguyễn Văn Hùng",
        dateOfHire: "2024/03/10",
        payDay: "2024/04/10",
        status: false,
    },
    {
        id: 8,
        nameBook: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
        nameStudent: "Phạm Văn Kiên",
        dateOfHire: "2024/02/20",
        payDay: "2024/03/20",
        status: false,
    },
    {
        id: 9,
        nameBook: "Đời Ngắn Đừng Ngủ Dài",
        nameStudent: "Lê Văn Long",
        dateOfHire: "2024/01/25",
        payDay: "2024/02/25",
        status: true,
    },
    {
        id: 10,
        nameBook: "Bí Mật Tư Duy Triệu Phú",
        nameStudent: "Nguyễn Văn Nam",
        dateOfHire: "2024/02/10",
        payDay: "2024/03/10",
        status: false,
    }
];

const reducerBook = (state=initialData, action: any) => {
    switch (action.type) {
        case "RENDER":
            return state
        default:
            return state
    }
}

export default reducerBook;

