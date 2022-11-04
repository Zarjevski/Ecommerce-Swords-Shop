import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/shop/Shop";
import Account from "./components/user/Account";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { getProducts } from "./features/shop/shopSlice";

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
