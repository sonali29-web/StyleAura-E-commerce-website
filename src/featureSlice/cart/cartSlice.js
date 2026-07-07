import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }

      alert("added to cart");
    },
    DeleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { AddCart, DeleteCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
