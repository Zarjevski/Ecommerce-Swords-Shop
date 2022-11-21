import { createSlice, Reducer } from "@reduxjs/toolkit";

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
    openSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    addNewParam: (state, action) => {
      state.queryObject = action.payload
    }
  },
});

export const { openSidebar, addNewParam } = shopSlice.actions;
export default shopSlice.reducer as Reducer;
