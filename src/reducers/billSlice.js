import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bill: [],
  totalPrice: 0,
};

const getTotalPrice = (bill) => {
  let total = 0;
  bill.forEach((item) => {
    total += item.price;
  });
  return total;
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    buyProduct: (state, action) => {
      const item = state.bill.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.price = action.payload.price;
      } else {
        state.bill.push({ ...action.payload });
      }
      state.totalPrice = getTotalPrice(state.bill);
    },
    sellProduct: (state, action) => {
      const item = state.bill.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity--;
        item.price = action.payload.price;
      } else {
        state.bill = state.bill.filter((item) => item.id !== action.payload.id);
      }
      state.totalPrice = getTotalPrice(state.bill);
    },
  },
});

export const { buyProduct, sellProduct } = billSlice.actions;

export default billSlice.reducer;
