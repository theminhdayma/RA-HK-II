import { ProductType } from "../interface/interface"
export const actionProduct = (type: string, payload:ProductType ) => {
    return {
        type,
        payload
    }
}

export const actionCart = (type: string, payload: ProductType) => {
    return {
        type,
        payload
    }
}