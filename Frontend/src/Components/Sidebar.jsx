import React from "react";
import { FiHome, FiBook, FiUsers } from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200">

      {/* Logo / Title */}
      <div className="px-6 py-6">
        <h2 className="text-xl font-bold text-green-800">
          BookTrack
        </h2>
        <p className="text-xs text-gray-400">
          Admin Dashboard
        </p>
      </div>

      {/* Menu */}
      <nav className="mt-6 flex flex-col gap-2 px-4">

        {/* Dashboard */}
        <div className="flex items-center gap-3 rounded-lg bg-green-700 px-4 py-3 text-white">
          <FiHome />
          <span className="text-sm font-medium">Dashboard</span>
        </div>

        {/* Gestion Livres */}
        <div className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-700">
          <FiBook />
          <span className="text-sm font-medium">Gestion des livres</span>
        </div>

        {/* Gestion Utilisateurs */}
        <div className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-700">
          <FiUsers />
          <span className="text-sm font-medium">Gestion des utilisateurs</span>
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;
