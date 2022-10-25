import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShopProvider } from "./context/ShopContext";
import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <ShopProvider>
        <App />
      </ShopProvider>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
