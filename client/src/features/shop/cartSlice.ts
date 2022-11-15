import { createSlice, Reducer } from "@reduxjs/toolkit";

let initialState: {
  cartItems: Array<object>;
  amonut: number;
  total: number;
} = {
  cartItems: [],
  amonut: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer as Reducer;
