
const initialChange: string = "Rikkei Academy"

const reducerChange = (state=initialChange, action: any) => {
    switch (action.type) {
        case "CHANGESTATE":
            return "RikkeiSoft"
        default:
            return state;
    }
}

export default reducerChange;