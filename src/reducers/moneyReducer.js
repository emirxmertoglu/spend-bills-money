import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  money: 10000,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    updateMoney: (state, action) => {
      const { type, price } = action.payload;

      if (type === "buy") {
        state.money -= price;
      } else if (type === "sell") {
        state.money += price;
      }
    },
  },
});

export const { updateMoney } = moneySlice.actions;

export default moneySlice.reducer;
