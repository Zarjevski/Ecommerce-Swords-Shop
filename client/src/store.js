import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice.js'
import cartReducer from './features/cart/cartSlice.js'
import shopReducer from './features/shop/shopSlice.js'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        shop: shopReducer
    }
})