import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: number
    name: string;
    status: boolean;
}

const listUser: User[] = [
    {
        id: 1,
        name: "Nguyễn Thế Minh",
        status: true,
    },
    {
        id: 2,
        name: "Trần Thị Minh Sâm",
        status: true,
    },
    {
        id: 3,
        name: "Nguyễn Ngọc Quang",
        status: false,
    },
    {
        id: 4,
        name: "Trần Nho Hà",
        status: false,
    },
];

const listUserReducer = createSlice({
    name: "listUserReducer",
    initialState: listUser,
    reducers: {
        showListUser: (state) => state,
        toggleUserStatus: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            state[index].status = !state[index].status;
        },
    },
});

export const { showListUser, toggleUserStatus } = listUserReducer.actions;
export default listUserReducer.reducer;
