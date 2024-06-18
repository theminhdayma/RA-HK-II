
// Bài 4
export const actionCount = (type: any, action: any) => {
    return {
        type: type,
        payload: action
    }
}

// Bài 5
export const actionRandomNumber = (type: any, action: any) => {
    return {
        type: type,
        payload: action
    }
}

// Bài 6
export const actionChange = (type: any, action: any)=> {
    return {
        type: type,
        payload: action,
    }
}

// Bài 7 + 8
export const actionCheck = (type: any, action: any) => {
    return {
        type: type,
        payload: action
    }
}

// Bài 9 + 10
export const registerUser = (user: { id: number; email: string; password: string; status: boolean }) => {
    return {
        type: 'REGISTER',
        payload: user
    };
};