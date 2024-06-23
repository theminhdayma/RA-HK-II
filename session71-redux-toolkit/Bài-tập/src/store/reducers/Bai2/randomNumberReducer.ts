import { createSlice } from "@reduxjs/toolkit"

const randomNumber: number[] = [];


const randomNumberReducer = createSlice({
    name: "randomNumberReducer",
    initialState: randomNumber,
    reducers: {
        randoms:(state)=> [...state, Math.floor(Math.random()*99)]
    }
})

export const {randoms} = randomNumberReducer.actions
export default randomNumberReducer.reducer