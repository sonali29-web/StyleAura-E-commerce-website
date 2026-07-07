import productsReducer from "../featureSlice/product/productsSlice";
import cartReducer from "../featureSlice/cart/cartSlice";
import wishReducer from "../featureSlice/wishlist/wishlistSlice";
import categoriesReducer from "../featureSlice/categories/categoroiesSlice";

import authReducer from "../featureSlice/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishReducer,
    categories: categoriesReducer,
    auth: authReducer,
  },
});

export default store;
