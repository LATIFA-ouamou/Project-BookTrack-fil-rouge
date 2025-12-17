import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/" className="flex items-center gap-2 font-semibold text-green-700">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white">
            📗
          </div>
          BookTrack
        </Link>

     
        <div className="hidden gap-8 text-sm text-gray-600 md:flex">
          <Link to="/" className="text-green-900 hover:text-green-800">
            Accueil
          </Link>
          <Link to="/dashboard" className="hover:text-green-800">
            Mes emprunts
          </Link>
          <Link to="/about" className="hover:text-green-800">
            About
          </Link>
        </div>

       
        <Link
          to="/login"
          className="rounded-md bg-green-800 px-5 py-2 text-sm text-white hover:bg-green-900"
        >
          Connexion
        </Link>

      </div>
    </nav>
  );
}
