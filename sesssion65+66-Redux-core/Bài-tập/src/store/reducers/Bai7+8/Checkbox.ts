const initialCheck: any = false;

const reducerCheck = (state=initialCheck, action: any) => {
    switch (action.type) {
        case "CHECKBOX":
            return !state
        default:
            return state;
    }
}

export default reducerCheck;