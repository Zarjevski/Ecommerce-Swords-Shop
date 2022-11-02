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
  reducers: {},
});

export default cartSlice.reducer as Reducer
