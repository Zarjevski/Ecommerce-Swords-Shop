import { createSlice, Reducer } from "@reduxjs/toolkit";

const initialState: { name: string | undefined; role: Array<string> } = {
  name: undefined,
  role: ["Guest"],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer as Reducer
