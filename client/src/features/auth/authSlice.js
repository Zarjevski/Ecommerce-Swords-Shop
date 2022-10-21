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
        }
    }
})
export const {setToken,setLoggedIn} = authSlice.actions
export default authSlice.reducer