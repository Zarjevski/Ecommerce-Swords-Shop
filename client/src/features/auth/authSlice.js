import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    token: "",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state,action)=>{
            state.token = action.payload
        },
        setLoggedIn: (state)=> {
            state.loggedIn = true
        },
        setLogout: (state) => {
            state.loggedIn = false;
            state.token = null;
        }
    }
})
export const {setToken,setLoggedIn,setLogout} = authSlice.actions
export default authSlice.reducer