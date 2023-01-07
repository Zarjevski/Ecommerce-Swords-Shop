import { createSlice, Reducer } from "@reduxjs/toolkit";

let initialState: {
  cart: any;
  total: number;
} = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addItem: (state, action) => {
      const { _id, title, price, amount, img } = action.payload;
      const newPrice = price * amount;
      const existing = state.cart.find(
        (item: { _id: string }) => item._id === _id
      );
      if (!existing) {
        const newItem = { _id, title, img, amount, price: newPrice };
        state.cart.push(newItem);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        if (amount == 0) {
          console.log("need a value");
        }
        const index = state.cart.findIndex(
          (item: any) => item._id == existing._id
        );
        state.cart[index].amount += amount;
        state.cart[index].price += amount * price;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex((i: any) => i._id == action.payload);
      const newArray = state.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");
      state.cart = [];
    },
    increaseAmount: (state, action) => {
      const index = state.cart.findIndex((i: any) => i._id == action.payload);
      let itemPrice = state.cart[index].price / state.cart[index].amount;
      state.cart[index].price += itemPrice;
      state.cart[index].amount += 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseAmount: (state, action) => {
      const index = state.cart.findIndex((i: any) => i._id == action.payload);
      if (state.cart[index].amount == 1) {
        const newArray = state.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        let itemPrice = state.cart[index].price / state.cart[index].amount;
        state.cart[index].price -= itemPrice;
        state.cart[index].amount -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart))
      }
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  setCart,
  increaseAmount,
  decreaseAmount,
} = cartSlice.actions;
export default cartSlice.reducer as Reducer;
