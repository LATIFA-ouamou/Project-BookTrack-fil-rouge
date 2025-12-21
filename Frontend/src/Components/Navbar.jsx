


import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/" className="flex items-center gap-2 font-semibold text-green-700">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white">
            📗
          </div>Book
          <span className="text-yellow-600">Track</span>
        
        </Link>
        {/* <h1 className="text-3xl font-bold text-green-900">
            Découvrez notre bibliothèque
          </h1> */}

        <div className="hidden gap-8 font-bold text-[#203E11] md:flex">
          <Link to="/">Accueil</Link>
          <Link to="/about">About</Link>

         {user?.role === "user" && (
  <Link to="/MesEmprunts" className="hover:text-[#203E11]">
    Mes emprunts
  </Link>
)}
          {user?.role === "admin" && <Link to="/dashboard">Dashboard</Link>}
        </div>

        {!user ? (
          <Link
            to="/login"
            className="rounded-md bg-[#203E11] px-5 py-2 text-sm text-white"
          >
            Connexion
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="rounded-md bg-red-600 px-5 py-2 text-sm text-white"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
