import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/shop/cartSlice";
import authReducer from "./features/auth/authSlice";
import shopReducer from "./features/shop/shopSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    shop: shopReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
