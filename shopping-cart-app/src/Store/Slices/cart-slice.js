//import create slice method
import { createSlice } from "@reduxjs/toolkit";

//initialize initial state
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      //returns state after filtering through it to remove any matching id of the product we we clicked
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// exported to modify the cart state in other components
export const { addToCart, removeFromCart } = cartSlice.actions;

//create slice = > give it name, menion intial state, create actions
export default cartSlice.reducer;
