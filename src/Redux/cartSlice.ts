import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartInterface {
  sizes: string[];
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
  id: number;
  quantity: number;
}

const initialState: cartInterface[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<cartInterface>) {
      if (!state.length) {
        return [...state, action.payload];
      } else {
        let index = state.findIndex((item) => item.id === action.payload.id);
        if (index != -1) {
          state[index].quantity += 1;
        } else {
          return [...state, action.payload];
        }
      }
    },
    removeCart(state, action: PayloadAction<number>) {
      let newCart = state.filter((item) => item.id != action.payload);
      return newCart;
    },
    incProduct(state, action: PayloadAction<number>) {
      let index = state.findIndex((item) => item.id === action.payload);
      state[index].quantity += 1;
    },
    decProduct(state, action: PayloadAction<number>) {
      let index = state.findIndex((item) => item.id === action.payload);
      if (state[index].quantity != 0) {
        state[index].quantity -= 1;
      }
    },
  },
});

export const { addCart, removeCart, incProduct, decProduct } = cartSlice.actions;
export default cartSlice.reducer;
