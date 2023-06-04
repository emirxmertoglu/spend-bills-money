import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "@/reducers/moneyReducer";
import productsReducer from "@/reducers/productReducer";
import billReducer from "@/reducers/billReducer";

const store = configureStore({
  reducer: {
    money: moneyReducer,
    products: productsReducer,
    bill: billReducer,
  },
});

export default store;
