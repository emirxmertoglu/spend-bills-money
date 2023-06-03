import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "@/reducers/moneySlice";
import productsReducer from "@/reducers/productsSlice";

const store = configureStore({
  reducer: {
    money: moneyReducer,
    products: productsReducer,
  },
});

export default store;
