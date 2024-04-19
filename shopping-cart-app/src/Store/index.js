import cartReducer from "./Slices/cart-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
