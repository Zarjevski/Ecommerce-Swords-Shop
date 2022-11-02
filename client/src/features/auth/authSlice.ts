import { createSlice, Reducer } from "@reduxjs/toolkit";

const initialState : {token:string,loggedIn:boolean} = {
    token: "",
    loggedIn: false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{}
})

export default authSlice.reducer as Reducer