// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import About from "./Pages/About";
// import Dashboard from "./Pages/Dachboard";
// import Navbar from "./Components/Navbar";
// import MesEmprunts from "./Pages/MesEmprunts";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/MesEmprunts" element={<MesEmprunts/>} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Dashboard from "./Pages/Dachboard";
import Navbar from "./Components/Navbar";
import MesEmprunts from "./Pages/MesEmprunts";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
import AjouterLivre from "./Components/AjouterLivre";
import ModifierLivre from "./Components/ModifierLivre";
import ListeUser from "./Components/ListeUser";
import BorrowForm from "./Pages/BorrowForm";

function App() {
  return (
    <>
      <Navbar />
<Routes>
  {/* PUBLIC */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* USER */}
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

  {/* ADMIN */}
  <Route
    path="/dashboard"
    element={
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    }
  />

  <Route
    path="/dashboard/ListeUser"
    element={
      <AdminRoute>
        <ListeUser />
      </AdminRoute>
    }
  />



<Route
    path="/dashboard/ajouter-livre"
    element={
      <AdminRoute>
        <AjouterLivre/>
      </AdminRoute>
    }
  />
  


  <Route
    path="/dashboard/modifier-livre"
    element={
      <AdminRoute>
        <ModifierLivre/>
      </AdminRoute>
    }
  />
</Routes>

    </>
  );
}

export default App;
