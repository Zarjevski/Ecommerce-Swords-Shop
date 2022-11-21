import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/shop/cartSlice";
import authReducer from "./features/auth/authSlice";
import shopReducer from "./features/shop/shopSlice";
import { shopApi } from "./features/shop/shopApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
