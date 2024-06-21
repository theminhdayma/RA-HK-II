import {ProductType} from "../../interface/interface.ts"
import {Action} from "../../interface/interface.ts"

const initialProduct: ProductType[] = JSON.parse(localStorage.getItem("listProduct") || "[]")

const productReducer = (state=initialProduct, action: Action) => {
    switch (action.type) {
        case "RENDER":
            return state
        default:
            return state;
    }
}

export default productReducer;