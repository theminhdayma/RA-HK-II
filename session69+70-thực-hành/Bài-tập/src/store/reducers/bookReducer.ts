import {Product} from "../../interface/interface.ts"
import {Action} from "../../interface/interface.ts"

const initialProduct: Product[] = JSON.parse(localStorage.getItem("Products") || "[]")

const bookReducer = (state=initialProduct, action: Action) => {
    switch (action.type) {
        case "ADD":
            return state
        case "UPDATE": 
            return state
        default:
            return state;
    }
}

export default bookReducer;