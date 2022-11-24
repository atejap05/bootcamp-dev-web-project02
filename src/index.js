import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FavoritesContextProvider from "./context/favoritesContext";
import AuthContextProvider from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
