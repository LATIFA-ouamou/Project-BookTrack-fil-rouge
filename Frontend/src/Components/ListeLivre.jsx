import React from "react";
import { FiSearch, FiFilter, FiEdit2, FiTrash2,FiPlus } from "react-icons/fi";


import { useNavigate } from "react-router-dom";

function ListeLivre() {
  const navigate = useNavigate();
  return (
    <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Liste des livres
        </h2>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-56 rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm outline-none focus:border-green-500"
            />
          </div>

            

          {/* Filter */}
          <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200">
            <FiFilter />
            Filtrer
          </button>

          <button
              onClick={() => navigate("/dashboard/ajouter-livre")}
            className="flex items-center gap-2 rounded-md bg-green-800 px-4 py-2 text-sm text-white hover:bg-green-900"
          >
            <FiPlus />
            Ajouter un livre
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-6 py-3 font-medium">Livre</th>
              <th className="px-6 py-3 font-medium">Auteur</th>
              <th className="px-6 py-3 font-medium">Statut</th>
              <th className="px-6 py-3 font-medium">Date d'ajout</th>
              <th className="px-6 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://covers.openlibrary.org/b/isbn/9782070541270-M.jpg"
                    alt=""
                    className="h-12 w-8 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Harry Potter à l'école des sorciers
                    </p>
                    <p className="text-xs text-gray-400">
                      ISBN: 978-2070541270
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">J.K. Rowling</td>
              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Disponible
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">15/03/2024</td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-4">
                  <FiEdit2 className="cursor-pointer text-blue-600 hover:text-blue-800" />
                  <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://covers.openlibrary.org/b/isbn/9782070329201-M.jpg"
                    alt=""
                    className="h-12 w-8 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Gatsby le Magnifique
                    </p>
                    <p className="text-xs text-gray-400">
                      ISBN: 978-2070329201
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">F. Scott Fitzgerald</td>
              <td className="px-6 py-4">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  Emprunté
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">12/03/2024</td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-4">
                  <FiEdit2 className="cursor-pointer text-blue-600 hover:text-blue-800" />
                  <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
                </div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://covers.openlibrary.org/b/isbn/9782070368228-M.jpg"
                    alt=""
                    className="h-12 w-8 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">1984</p>
                    <p className="text-xs text-gray-400">
                      ISBN: 978-2070368228
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">George Orwell</td>
              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Disponible
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">10/03/2024</td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-4">
                  <FiEdit2 className="cursor-pointer text-blue-600 hover:text-blue-800" />
                  <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListeLivre;
