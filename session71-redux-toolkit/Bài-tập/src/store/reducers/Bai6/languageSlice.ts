// store/reducers/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "en";

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => state === 'en' ? 'vi' : 'en'
  }
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
