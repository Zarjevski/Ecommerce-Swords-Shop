import { createSlice, Reducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: { token: string; loggedIn: boolean, role:Array<string> } = {
  token: "",
  loggedIn: false,
  role: ["Guest"],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRole: (state,actions)=>{
      state.role = actions.payload
    },
    setLoggedIn: (state) => {
      state.loggedIn = true;
    },
    setLoggedOut: (state) => {
      (state.loggedIn = false),
        () => axios.post("http://localhost:80/auth/logout"),
        (state.token = "");
    },
  },
});

export const { setToken, setLoggedIn, setRole } = authSlice.actions;
export default authSlice.reducer as Reducer;
