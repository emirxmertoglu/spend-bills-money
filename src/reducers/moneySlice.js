import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  money: 100000000000,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {},
});

export default moneySlice.reducer;
