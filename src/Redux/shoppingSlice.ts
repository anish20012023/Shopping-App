import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productData {
  sizes: string[];
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
  id: number;

}
interface initialState {
  products: productData[];
  isUpdating: boolean;
}
const initialState: initialState = {
  products: [],
  isUpdating: true,
};

const shoppingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    AddProducts(state, action: PayloadAction<initialState>) {
      return action.payload;
    },
  },
});

export const { AddProducts } = shoppingSlice.actions;
export default shoppingSlice.reducer;
