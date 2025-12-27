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

  /* ===== STATUS BADGE ===== */
  const renderStatus = (isBorrowed) =>
    isBorrowed ? (
      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
        <FaBook className="h-3 w-3" />
        Emprunté
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
        <FaCheck className="h-3 w-3" />
        Disponible
      </span>
    );

  return (
    <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#203E11]">
          Liste des livres
        </h2>

        <button
          onClick={() => navigate("/dashboard/ajouter-livre")}
          className="flex items-center gap-2 rounded-md bg-[#203E11] px-4 py-2 text-sm text-white hover:bg-[#1A330E] transition"
        >
          <FiPlus />
          Ajouter un livre
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-green-100 text-left text-[#203E11]">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Titre</th>
              <th className="px-6 py-3">Auteur</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Statut</th>
              <th className="px-6 py-3 text-center">Actions</th>
              <th className="px-6 py-3">Catégorie</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {books.map((book) => (
              <tr
                key={book.id}
                className="hover:bg-[#203E11]/5 transition"
              >
                <td className="px-6 py-4">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-12 w-12 rounded-lg object-cover border"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">
                      Aucune image
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 font-medium text-gray-800">
                  {book.title}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {book.author}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {book.stock}
                </td>

                <td className="px-6 py-4">
                  {renderStatus(book.is_borrowed)}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-4">
                    <FiEdit2
                      onClick={() =>
                        navigate(`/dashboard/modifier-livre/${book.id}`)
                      }
                      className="cursor-pointer text-blue-600 hover:text-blue-800"
                      title="Modifier"
                    />

                    <FiTrash2
                      onClick={() => deleteBook(book.id)}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                      title="Supprimer"
                    />
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {book?.category?.name || "—"}
                </td>
              </tr>
            ))}

            {books.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-6 text-center text-gray-400"
                >
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
