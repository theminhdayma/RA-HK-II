import { createSlice } from "@reduxjs/toolkit"

const isCheck: boolean = false

const isCheckReducer = createSlice({
    name: "isCheckReducer",
    initialState: isCheck,
    reducers: {
        isCheckShow: (state) => !state
    }
})

export const {isCheckShow} = isCheckReducer.actions
export default isCheckReducer.reducer

