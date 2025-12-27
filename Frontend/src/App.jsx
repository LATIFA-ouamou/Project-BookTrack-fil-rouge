import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import AdminLayout from "./Layout/AdminLayout";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import DetailLivre from "./Pages/DetailLivre";

import Dashboard from "./Pages/Admin/Dachboard";
import MesEmprunts from "./Pages/MesEmprunts";
import BorrowForm from "./Pages/BorrowForm";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

import AjouterLivre from "./Components/DachAdmin/AjouterLivre";
import ModifierLivre from "./Components/ModifierLivre";
import ListeUser from "./Components/ListeUser";
import ListeLivre from "./Components/ListeLivre";

function App() {
  return (
    <Routes>
      {/* 🌍 PUBLIC */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<DetailLivre />} />

        <Route
          path="/MesEmprunts"
          element={
            <ProtectedRoute>
              <MesEmprunts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/borrow/:bookId"
          element={
            <ProtectedRoute>
              <BorrowForm />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* 🔐 AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🛠️ ADMIN */}
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<ListeUser />} />
        <Route path="ajouter-livre" element={<AjouterLivre />} />
        <Route path="/dashboard" element={<ListeLivre />} />
        <Route path="modifier-livre/:id" element={<ModifierLivre />} />
      </Route>
    </Routes>
  );
}

export default App;
