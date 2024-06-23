import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
}

const initialUser: User = {
  id: 1,
  userName: "Nguyễn Thế Minh",
  email: "theminh2005z@gmail.com",
  password: "123456",
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState: {
    user: initialUser,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === state.user.email && password === state.user.password) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = loginReducer.actions;
export default loginReducer.reducer;
