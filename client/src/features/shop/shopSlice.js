import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paramsObject: {},
    products: [],
    isLoading: true
}

const shopSlice = createSlice({
    name: 'shop',
    initialState
})

export default shopSlice.reducer