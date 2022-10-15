import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShopProvider } from "./context/ShopContext";
import {AuthProvider} from './context/AuthContex'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ShopProvider>
      <App />
    </ShopProvider>
    </AuthProvider>
  </React.StrictMode>
);
