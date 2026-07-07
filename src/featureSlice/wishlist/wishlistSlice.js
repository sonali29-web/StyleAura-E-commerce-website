import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddWish: (state, action) => {
      state.wishlist.push(action.payload);

      alert("added to wish");
    },
    DeleteWish: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (wish) => wish.id !== action.payload,
      );
      alert("wish remove");
    },
    setWish: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { AddWish, DeleteWish, setWish } = wishlistSlice.actions;

export default wishlistSlice.reducer;
