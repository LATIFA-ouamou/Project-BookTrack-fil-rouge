import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function MesEmprunts() {
  const { user } = useAuth();
  const location = useLocation();

  const successMessage = location.state?.message;

  const [borrows, setBorrows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [returnLoading, setReturnLoading] = useState(null);
  const [error, setError] = useState("");

  const fetchBorrows = async () => {
    try {
      const res = await api.get("/my-borrows");
      setBorrows(res.data);
    } catch {
      setError("Impossible de charger vos emprunts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBorrows();
  }, []);

  const handleReturn = async (bookId) => {
    setReturnLoading(bookId);
    setError("");

    try {
      await api.post(`/return/${bookId}`);
      await fetchBorrows();
    } catch {
      setError("Erreur lors du retour du livre");
    } finally {
      setReturnLoading(null);
    }
  };

  if (!user || user.role !== "user") {
    return (
      <div className="p-6 text-center text-gray-500">
        Accès non autorisé
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-2xl font-bold text-[#203E11]">
        Mes emprunts
      </h1>

      {successMessage && (
        <div className="mb-6 rounded-lg bg-green-50 p-3 text-sm text-green-700">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-sm text-gray-500">Chargement...</p>
      ) : borrows.length === 0 ? (
        <p className="text-sm text-gray-500">
          Vous n’avez aucun livre emprunté
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {borrows.map((borrow) => (
            <div
              key={borrow.id}
              className="rounded-xl border bg-[#C9E3CC] shadow-sm"
            >
             
              <div className="p-3">
                <img
                  src={borrow.book.image || "/livre.jpg"}
                  alt={borrow.book.title}
                  className="h-44 w-full rounded-lg object-cover"
                />
              </div>

             
              <div className="px-4 pb-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {borrow.book.title}
                </h3>

                <p className="mt-1 text-xs font-bold text-yellow-700">
                  {borrow.book.author}
                </p>

<p className="mt-1 text-xs text-green-800 font-semibold">
  Catégorie : {borrow.book.category?.name || "Sans catégorie"}
</p>

                
                <div className="mt-2 text-xs text-gray-600 space-y-1">
                  <p>
                    📅 Emprunté le :{" "}
                    <span className="font-medium">
                      {borrow.borrow_date}
                    </span>
                  </p>
                  <p>
                    ⏳ Retour prévu :{" "}
                    <span className="font-medium">
                      {borrow.return_date}
                    </span>
                  </p>
                </div>

                {/* Statut + action */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                    Emprunté
                  </span>

                  <button
                    onClick={() => handleReturn(borrow.book.id)}
                    disabled={returnLoading === borrow.book.id}
                    className="rounded-md bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-50"
                  >
                    {returnLoading === borrow.book.id
                      ? "Retour..."
                      : "Retourner"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
