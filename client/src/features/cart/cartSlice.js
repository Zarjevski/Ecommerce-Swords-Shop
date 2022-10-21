import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: ['hello'],
    amount: 1,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
})

export default cartSlice.reducer