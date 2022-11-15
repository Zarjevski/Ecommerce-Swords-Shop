import { createSlice, Reducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// after i done set it up make sure you return the right type to products

const initialState: {
  products: Array<object>;
  queryObject: object;
  sidebarOpen: boolean;
  isLoading: boolean;
} = {
  queryObject: {},
  products: [],
  sidebarOpen: false,
  isLoading: true,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:80/products",);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        const products = action.payload;
        state.isLoading = false;
        state.products = products;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const { openSidebar } = shopSlice.actions;
export default shopSlice.reducer as Reducer;
