import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import shoppingSlice from "./shoppingSlice";

const RootState = combineReducers({
  shopping: shoppingSlice,
  cart: cartSlice,
});
export type RootState = ReturnType<typeof RootState>;
export const store = configureStore({
  reducer: RootState,
});
