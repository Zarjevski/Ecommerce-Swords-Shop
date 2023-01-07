import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/utility/Navbar";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ProductPage from "./components/pages/ProductPage";
import About from "./components/pages/About";
import Cart from "./components/cart/Cart";
import Footer from "./components/utility/Footer";
import NotFound from "./components/pages/NotFound";
import Register from "./components/pages/Register";
// auth
import PresistLogin from "./components/auth/PresistLogin";
import RequiredAuth from "./components/auth/RequiredAuth";
import LoginAuth from "./components/auth/LoginAuth";
import Profile from "./components/pages/Profile";
// admin
import Dashboard from "./components/admin/Dashboard";
import ProductTable from "./components/admin/products/ProductTable";
import CreateProduct from "./components/admin/products/CreateProduct";
import UpdateProduct from "./components/admin/products/UpdateProduct";
import HomeDash from "./components/admin/HomeDash";
import Orders from "./components/admin/products/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PresistLogin />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop/:category" />
          </Route>
          <Route path="/shop/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginAuth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          {/* private routes */}
          <Route element={<RequiredAuth allowedRole={["Customer"]} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<RequiredAuth allowedRole={["Admin"]} />}>
            <Route element={<Dashboard />}>
              <Route path="/dashboard/home" element={<HomeDash />} />
              <Route path="/dashboard/products" element={<ProductTable />} />
              <Route path="/dashboard/products/edit/:id" element={<UpdateProduct/>}/>
              <Route path="/dashboard/create" element={<CreateProduct />} />
              <Route path="/dashboard/orders" element={<Orders/>}/>
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
