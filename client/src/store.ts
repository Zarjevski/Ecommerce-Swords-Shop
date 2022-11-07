import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/shop/cartSlice";
import authReducer from "./features/auth/authSlice"
import shopReducer from "./features/shop/shopSlice";
import { apiSlice } from "./features/api/apiSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        shop: shopReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch