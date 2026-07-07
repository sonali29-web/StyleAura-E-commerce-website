import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selectCategoryProduct: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategoryProducts: (state, action) => {
      state.selectCategoryProduct = action.payload;
    },
    setcategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { fetchCategoryProducts, setcategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
