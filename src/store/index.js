import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "@/reducers/moneySlice";

const store = configureStore({
  reducer: {
    money: moneyReducer,
  },
});

export default store;
