import { createSlice, Reducer } from "@reduxjs/toolkit";

const initialState: {
  queryObject: object;
  sidebarOpen: boolean;
  isLoading: boolean;
} = {
  queryObject: {},
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
