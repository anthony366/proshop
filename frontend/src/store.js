import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./redux/productReducers";

const store = configureStore({
  reducer: productReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
