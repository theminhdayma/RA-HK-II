import { createSlice } from "@reduxjs/toolkit";

const checkColor: boolean = false;


const checks = createSlice({
    name: "checks",
    initialState: checkColor,
    reducers: {
        check: (state) => !state
    } 
})

export const {check} = checks.actions
export default checks.reducer;