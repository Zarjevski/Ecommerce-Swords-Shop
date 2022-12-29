import { createSlice, Reducer } from "@reduxjs/toolkit";
import { useGetProductsQuery } from "../../api/apiSlice";

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

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    addNewParam: (state, action) => {
      state.queryObject = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  addNewParam,
} = shopSlice.actions;
export default shopSlice.reducer as Reducer;
