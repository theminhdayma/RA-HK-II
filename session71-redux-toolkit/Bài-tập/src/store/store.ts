import { configureStore } from "@reduxjs/toolkit";
import count from "./reducers/Bai1/countReducer"
import randoms from "./reducers/Bai2/randomNumberReducer";
import check from "./reducers/Bai3/lightDark";
import mode from "./reducers/Bai4/modeReducer";
import isCheckShow from "./reducers/Bai5/baiTap5";
import toggleLanguage from "./reducers/Bai6/languageSlice";
import showListUser from "./reducers/Bai7/listUser";
import loginReducer from "./reducers/Bai8/Login";


export const store: any = configureStore({
    reducer: {
        count: count,
        randoms: randoms,
        check: check,
        mode: mode,
        isCheckShow: isCheckShow,
        toggleLanguage: toggleLanguage,
        showListUser: showListUser,
        loginReducer: loginReducer
    }
})