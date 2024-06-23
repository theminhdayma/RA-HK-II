
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state 
const countState: number = 0;

const countReducer = createSlice({
    name: "CountReducer",
    initialState: countState,
    reducers: {
        // Đây là những action
        increase:(state)=> state+=1,
        decrease:(state)=> state-=1,
        reset: () => 0
    } 
})

// Xuất ra nhưng action
export const {increase, decrease, reset} = countReducer.actions
// => Xuất ra reducer
export default countReducer.reducer;