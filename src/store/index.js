import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "@/reducers/moneySlice";
import productsReducer from "@/reducers/productsSlice";
import billReducer from "@/reducers/billSlice";

const store = configureStore({
  reducer: {
    money: moneyReducer,
    products: productsReducer,
    bill: billReducer,
  },
});

export default store;
