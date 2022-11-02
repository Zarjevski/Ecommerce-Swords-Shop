import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/shop/cartSlice";
import authReducer from "./features/auth/authSlice"
import userReducer from './features/auth/userSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>