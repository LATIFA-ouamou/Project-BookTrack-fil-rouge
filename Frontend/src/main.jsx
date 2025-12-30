

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DashProvider } from "./context/DashContext";
import { BookProvider } from "./context/BookContext";
import { BorrowProvider } from "./context/BorrowContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
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
