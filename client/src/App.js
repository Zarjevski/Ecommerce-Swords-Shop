// imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Account from "./components/user/Account";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer";
// end of imports

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<h1>hello world</h1>} />
        <Route path="/account" element={<Account/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
