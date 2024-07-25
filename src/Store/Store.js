import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducer/CartSlice";
import CheckOutReducer from "./Reducer/CheckOutSlice";

export const Store = configureStore({
  reducer: {
    Cart: CartReducer,
    CheckOut: CheckOutReducer,
  },
});
