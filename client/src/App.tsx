import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/utility/Navbar";
import PresistLogin from "./features/auth/PresistLogin";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Cart from "./components/cart/Cart";
import Login from "./features/auth/Login";
import RequiredAuth from "./components/RequiredAuth";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import ProductPage from "./components/pages/ProductPage";
import Footer from "./components/utility/Footer";
import ProductTable from "./components/admin/products/ProductTable";
import CreateProduct from "./components/admin/products/CreateProduct";
import CartAuth from "./components/CartAuth";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PresistLogin />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/shop/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartAuth />}>
          <Route element={<Cart />} />
        </Route>
        {/* private routes */}
          <Route element={<RequiredAuth allowedRole={["Customer"]} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<RequiredAuth allowedRole={["Admin"]} />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/products" element={<ProductTable />} />
              <Route path="/dashboard/create" element={<CreateProduct />} />
            </Route>
          </Route>
        </Route>
        {/* error route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
