import { createSlice } from "@reduxjs/toolkit";

const initialState: { queryObject: object } = {
  queryObject: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export default shopSlice;
