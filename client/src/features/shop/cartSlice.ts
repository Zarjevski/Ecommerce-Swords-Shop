import { createSlice, Reducer } from "@reduxjs/toolkit";

let initialState: {
  cart: any;
  total: number;
} = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]") || [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { _id, title, price, amount} = action.payload;
      const newPrice = price * amount;
      const existing = JSON.parse(localStorage.getItem("cart") || "[]").find(
        (item: { _id: string }) => item._id === _id
      );
      if (!existing) {
        const newItem = { _id, title, amount, price: newPrice };
        state.cart.push(newItem);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
          if (amount == 0) {
            console.log("need a value");
          }
          const index = state.cart.findIndex((item:any) => item._id == existing._id )
          state.cart[index].amount += amount
          state.cart[index].price += amount * price
          localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");
      state.cart = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer as Reducer;
