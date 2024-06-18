const initialRandomNumber: number[] = []

const reducerRandomNumber = (state=initialRandomNumber, action: any) => {
    switch (action.type) {
        case "ADDNUMBER":
            return [...state,Math.floor(Math.random()*99)]
        default:
            return state;
    }
}

export default reducerRandomNumber;