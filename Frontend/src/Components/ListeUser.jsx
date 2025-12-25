

import React from "react";
import { FiTrash2, FiUser } from "react-icons/fi";
import { useDash } from "../context/DashContext";
import { useNavigate } from "react-router-dom";
function ListeUser() {
  const { users, loading } = useDash();

  if (loading) {
    return (
     
      <div className="mt-10 text-center text-gray-500">
        Chargement des utilisateurs...
      </div>
    );
  }
  const navigate = useNavigate();
  return (
   
    <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
      
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Liste des utilisateurs
        </h2>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-6 py-3">Utilisateur</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Rôle</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <FiUser />
                    </div>
                    <span className="font-medium text-gray-800">
                      {user.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                      ${
                        user.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
                  </div>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-6 text-center text-gray-400"
                >
                  Aucun utilisateur trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border rounded-lg"
            >
              ← Retour
            </button>
      </div>
    </div>
  );
}

export default ListeUser;
