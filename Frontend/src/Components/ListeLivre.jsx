

import React from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { FaBook, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDash } from "../context/DashContext";

function ListeLivre() {
  const { books, loading, deleteBook } = useDash();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="mt-10 text-center text-gray-500">
        Chargement des livres...
      </div>
    );
  }

  
  const renderStatus = (isBorrowed) => {
    return isBorrowed ? (
      <span className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
        <FaBook className="h-3 w-3" />
        Emprunté
      </span>
    ) : (
      <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
        <FaCheck className="h-3 w-3" />
        Disponible
      </span>
    );
  };

  return (
    <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Liste des livres</h2>
        <button
          onClick={() => navigate("/dashboard/ajouter-livre")}
          className="flex items-center gap-2 rounded-md bg-green-800 px-4 py-2 text-sm text-white hover:bg-green-900"
        >
          <FiPlus />
          Ajouter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-6 py-3">Livre</th>
              <th className="px-6 py-3">Auteur</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Statut</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{book.title}</td>
                <td className="px-6 py-4 text-gray-600">{book.author}</td>
                <td className="px-6 py-4">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-12 w-12 rounded object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">Aucune image</span>
                  )}
                </td>
                <td className="px-6 py-4">{renderStatus(book.is_borrowed)}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-4">
                    <FiEdit2
                      onClick={() => navigate(`/dashboard/modifier-livre/${book.id}`)}
                      className="cursor-pointer text-blue-600 hover:text-blue-800"
                    />
                    <FiTrash2
                      onClick={() => deleteBook(book.id)}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                    />
                  </div>
                </td>
              </tr>
            ))}

            {books.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-6 text-center text-gray-400">
                  Aucun livre trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListeLivre;
