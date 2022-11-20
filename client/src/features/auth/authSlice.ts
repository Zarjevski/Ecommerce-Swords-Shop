import { createSlice, Reducer } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../api/axios";

const initialState: {
  token: string;
  userName: string;
  loggedIn: boolean;
  role: Array<string>;
} = {
  token: "",
  userName: "Guest",
  loggedIn: false,
  role: ["Guest"],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const {accessToken, userRole, username} = action.payload
      state.token = accessToken;
      state.role = userRole;
      state.userName = username
      state.loggedIn = true
    },
    logOut: (state) => {
        axios.post('/auth/logout')
        state.loggedIn = initialState.loggedIn;
        state.role = initialState.role;
        state.token = initialState.token;
        state.userName = initialState.userName
    },
  },
});

export const { setAuth, logOut } = authSlice.actions;
export const useToken = (state:RootState) => state.auth.token
export default authSlice.reducer as Reducer;