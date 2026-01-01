

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DashProvider } from "./context/DashContext";
import { BookProvider } from "./context/BookContext";
import { BorrowProvider } from "./context/BorrowContext";
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ToastContainer position="top-right" autoClose={3000} />
    <AuthProvider>
      <BookProvider>
        <BorrowProvider>
          <DashProvider>
            <App />
          </DashProvider>
        </BorrowProvider>
      </BookProvider>
    </AuthProvider>
  </BrowserRouter>
);
