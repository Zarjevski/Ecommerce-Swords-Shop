import { createSlice, Reducer } from "@reduxjs/toolkit";

let initialState: {
  cart: Array<object>;
  total: number;
} = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { title, price } = action.payload;
      const newItem = { name: title, price: price, amount: 1 };
      state.cart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getItems: (state) => {
      const items:any = localStorage.getItem("cart")
      console.log(items);
      const parsedItems = JSON.parse(items);
      console.log(parsedItems);
      state.cart = parsedItems  
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");
      state.cart = [];
    },
  },
});

export const { addItem, getItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer as Reducer;
