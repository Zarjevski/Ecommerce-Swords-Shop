import React, { useEffect } from "react";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import PresistLogin from "./features/auth/PresistLogin";
import Home from "./components/Home";
import Shop from "./components/shop/Shop";
import About from "./components/About";
import Cart from "./components/shop/Cart";
import Login from "./components/auth/Login";
import RequiredAuth from "./components/RequiredAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { getProducts } from "./features/shop/shopSlice";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/user/Profile";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        {/* private routes */}
        <Route element={<PresistLogin />}>
          <Route element={<RequiredAuth allowedRole={["Customer"]} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<RequiredAuth allowedRole={["Admin"]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        {/* error route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
