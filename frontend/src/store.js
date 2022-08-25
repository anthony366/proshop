import { configureStore } from "@reduxjs/toolkit";
import { productReducer, productDetailsReducer } from "./redux/productReducers";
import { cartReducer } from "./redux/cartReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const store = configureStore({
  reducer: {
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
