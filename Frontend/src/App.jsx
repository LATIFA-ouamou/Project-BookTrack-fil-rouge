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

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER CONNECTÉ */}
        <Route
          path="/MesEmprunts"
          element={
            <ProtectedRoute>
              <MesEmprunts />
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
      </Routes>
    </>
  );
}

export default App;
